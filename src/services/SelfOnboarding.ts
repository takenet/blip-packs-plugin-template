import { Command } from 'lime-js';
import {
    BLIP_PACKS_GET_RESOURCE,
    BLIP_PACKS_SEND_COMMAND,
    BLIP_PACKS_SET_RESOURCE,
} from 'src/constants/BlipPackEvents';
import { EventService } from './Events';

export class SelfOnboardingService {
    public static getResource = async (resourceName: string) => {
        return await EventService.publishEvent<{ resourceName: string }, string>(BLIP_PACKS_GET_RESOURCE, {
            resourceName,
        });
    };

    public static setResource = async (resourceName: string, value: string) => {
        await EventService.publishEvent<{ resourceName: string; value: string }>(BLIP_PACKS_SET_RESOURCE, {
            resourceName,
            value,
        });
    };

    public static sendCommand = async (commandName: Command, payload: string) => {
        await EventService.publishEvent<{ commandName: Command; payload: string }>(BLIP_PACKS_SEND_COMMAND, {
            commandName,
            payload,
        });
    };
}
