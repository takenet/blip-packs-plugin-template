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