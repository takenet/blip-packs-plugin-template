import { v4 as uuidv4 } from 'uuid';

type CallbackFunction = (data?: any) => void;

export class EventService {
    public static publishEvent<T = any, TResult = any>(eventName: string, data: T, resultCallback?: CallbackFunction): Promise<TResult> {
        return new Promise<any>((resolve, reject) => {
            const eventId = uuidv4();

            const eventListener = (event: Event) => {
                const customEventData = event as CustomEvent;
                const eventData = customEventData.detail as EventData;

                if (!!resultCallback) {
                    resultCallback(eventData.data);
                }
                resolve(eventData.data);
                window.removeEventListener(eventId, eventListener);
            };

            window.addEventListener(eventId, eventListener);

            try {
                const eventData = new EventData(eventId, eventName, data);
                window.dispatchEvent(new CustomEvent(eventName, { detail: eventData }));
            } catch {
                window.removeEventListener(eventId, eventListener);
                reject();
            }
        });
    }
}

export class EventData {
    eventId: string;
    eventName: string;
    data: any;

    constructor(eventId: string, eventName: string, data: any = null) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.data = data;
    }
}
