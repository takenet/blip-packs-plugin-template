import { EventData } from 'src/types/EventData';
import { v4 as uuidv4 } from 'uuid';

type CallbackFunction = (data?: any) => void;

export const PublishEvent = (eventName: string, data: any, resultCallback?: CallbackFunction): Promise<any> => {
    return new Promise((resolve, reject) => {
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
};
