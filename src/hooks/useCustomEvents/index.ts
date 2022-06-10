import { useEffect } from 'react';
import { CustomEventParams } from './types';

export const useEmitter = <T>({
    eventName,
    target = window,
}: Pick<CustomEventParams<unknown>, 'eventName' | 'target'>) => {
    const callEvent = (data?: T) => {
        const event = new CustomEvent(eventName, {
            detail: data,
            composed: true,
        });

        target.dispatchEvent(event);
    };

    return callEvent;
};

export const useListener = <T>({
    eventName,
    eventToListen,
    target = window,
    options,
}: CustomEventParams<T>) => {
    useEffect(() => {
        if (typeof eventToListen === 'function') {
            const handleEvent = (e: Event) => {
                eventToListen(e as CustomEvent);
            };

            target.addEventListener(eventName, handleEvent, options);

            return () =>
                target.removeEventListener(eventName, handleEvent, options);
        }
    }, [target, eventName, eventToListen, options]);
};

export const useCustomEvent = <T>({
    eventName,
    eventToListen,
    target = window,
    options = {},
}: CustomEventParams<T>) => {
    const handleEvent = eventToListen || (() => null);

    useListener<T>({ eventName, eventToListen: handleEvent, target, options });

    return useEmitter<T>({ eventName, target });
};
