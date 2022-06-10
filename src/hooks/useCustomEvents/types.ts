export interface CustomEventParams<T> {
    readonly eventName: string;
    eventToListen?: (e: CustomEvent<T>) => void;
    readonly target?: Window | Document | HTMLElement;
    readonly options?: AddEventListenerOptions;
}

export type Target = Window | Document | HTMLElement;
