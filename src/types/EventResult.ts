export enum EventStatus {
    Success = 'Success',
    Error = 'Error',
}

export type EventResult = {
    status: EventStatus;
    data?: any;
};
