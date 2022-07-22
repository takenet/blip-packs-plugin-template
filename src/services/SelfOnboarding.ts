import { Command } from 'lime-js';
import {
    BLIP_PACKS_GET_RESOURCES,
    BLIP_PACKS_SEND_COMMAND,
    BLIP_PACKS_SET_RESOURCES,
} from 'src/constants/BlipPackEvents';
import { PublishEvent } from './EventPublisher';

export class SelfOnboardingService {
    public static getResource = async (resourceName: string) => {
        return await PublishEvent(BLIP_PACKS_GET_RESOURCES, {
            resourceName,
        });
    };

    public static setResources = async (resourceName: string, value: string) => {
        return await PublishEvent(BLIP_PACKS_SET_RESOURCES, {
            resourceName,
            value,
        });
    };

    public static sendCommand = async (commandName: Command, payload: any) => {
        return await PublishEvent(BLIP_PACKS_SEND_COMMAND, {
            commandName,
            payload,
        });
    };
}
