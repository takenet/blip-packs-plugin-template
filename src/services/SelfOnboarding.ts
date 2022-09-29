import {
    SO_GET_RESOURCES,
    SO_NEXT_STEP,
    SO_SET_RESOURCES,
    SO_STEP_BACK,
    SO_TRACKING_SEGMENT,
} from 'src/constants/BlipPackEvents';
import { EventStatus } from 'src/types/EventResult';
import { Resource } from 'src/types/Resource';
import { TrackProps } from 'src/types/TrackProps';
import { PublishEvent } from './EventPublisher';

export const GetResources = async (botShortName: string): Promise<Resource[]> => {
    const result = await PublishEvent(SO_GET_RESOURCES, botShortName);

    if (result.status == EventStatus.Success) {
        return result.data as Resource[];
    }

    return [];
};

export const SetResources = async (botShortName: string, resources: Resource[]) => {
    return await PublishEvent(SO_SET_RESOURCES, { botShortName, resources });
};

export const SendTrackingEvent = async (event: string, payload?: TrackProps) => {
    await PublishEvent(SO_TRACKING_SEGMENT, { event, payload });
};

export const NextStep = async () => {
    await PublishEvent(SO_NEXT_STEP);
};

export const StepBack = async () => {
    await PublishEvent(SO_STEP_BACK);
};
