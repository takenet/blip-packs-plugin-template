import htmlToReact from 'html-to-react';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { App } from './App.tsx';
import { APPLICATION_NAME } from './constants/Application';

// This class is required to create the web component
class ReactElement extends HTMLElement {
    constructor() {
        super();
        this.observer = new MutationObserver(() => this.update());
        this.observer.observe(this, { attributes: true });
        this.customInfo = [];
    }

    sendInfo(data) {
        this.customInfo = data;
        this.update();
    }

    connectedCallback() {
        this._innerHTML = this.innerHTML;
        this.mount();
    }

    disconnectedCallback() {
        this.unmount();
        this.observer.disconnect();
    }

    update() {
        this.unmount();
        this.mount();
    }

    mount() {
        const propTypes = App.propTypes ? App.propTypes : {};
        const events = App.propTypes ? App.propTypes : {};
        let props = {
            ...this.getProps(this.attributes, propTypes),
            ...this.getEvents(events),
            children: this.parseHtmlToReact(this.innerHTML),
            ...this.customInfo,
        };
        render(<App {...props} />, this);
    }

    unmount() {
        unmountComponentAtNode(this);
    }

    parseHtmlToReact(html) {
        return html && new htmlToReact.Parser().parse(html);
    }

    getProps(attributes, propTypes) {
        propTypes = propTypes || {};
        return [...attributes]
            .filter(attr => attr.name !== 'style')
            .map(attr => this.convert(propTypes, attr.name, attr.value))
            .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {});
    }

    getEvents(propTypes) {
        return Object.keys(propTypes)
            .filter(key => /on([A-Z].*)/.exec(key))
            .reduce(
                (events, ev) => ({
                    ...events,
                    [ev]: args => this.dispatchEvent(new CustomEvent(ev, { ...args })),
                }),
                {}
            );
    }

    convert(propTypes, attrName, attrValue) {
        const propName = Object.keys(propTypes).find(key => key.toLowerCase() == attrName);
        let value = attrValue;
        if (attrValue === 'true' || attrValue === 'false') value = attrValue == 'true';
        else if (!isNaN(attrValue) && attrValue !== '') value = +attrValue;
        else if (/^{.*}/.exec(attrValue)) value = JSON.parse(attrValue);
        return {
            name: propName ? propName : attrName,
            value: value,
        };
    }
}

customElements.get(APPLICATION_NAME) || customElements.define(APPLICATION_NAME, ReactElement);
