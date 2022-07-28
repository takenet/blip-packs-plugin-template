import {
    SO_GET_RESOURCE,
    SO_MOVE_TO_NEXT_STEP,
    SO_MOVE_TO_PREVIOUS_STEP,
    SO_SET_RESOURCES,
    SO_TRACKING_SEGMENT,
} from 'src/constants/BlipPackEvents';
import { EventStatus } from 'src/types/EventResult';
import { Resource } from 'src/types/Resource';
import { TrackProps } from 'src/types/TrackProps';
import { PublishEvent } from './EventPublisher';

export const GetResource = async (resourceName: string): Promise<Resource[]> => {
    const result = await PublishEvent(SO_GET_RESOURCE, resourceName);

    if (result.status == EventStatus.Success) {
        return result.data as Resource[];
    }

    return [];
};

export const SetResources = async (resources: Resource[]) => {
    await PublishEvent(SO_SET_RESOURCES, resources);
};

export const SendTrackingEvent = async (event: string, payload?: TrackProps) => {
    await PublishEvent(SO_TRACKING_SEGMENT, { event, payload });
};

export const MoveToNextStep = async () => {
    await PublishEvent(SO_MOVE_TO_NEXT_STEP);
};

export const MoveToPreviousStep = async () => {
    await PublishEvent(SO_MOVE_TO_PREVIOUS_STEP);
};
