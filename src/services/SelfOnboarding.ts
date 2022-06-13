import { BLIP_PACKS_GET_RESOURCE } from 'src/constants/BlipPackEvents';
import { EventService } from './Events';

export class SelfOnboardingService {
    public static getResource = async (resourceName: string) => {
        return await EventService.publishEvent<{resourceName: string}, string>(BLIP_PACKS_GET_RESOURCE, {
            resourceName
        });
    }

    public static setResource = async (resourceName: string, value: string) => {
        await EventService.publishEvent<{resourceName: string, value: string}>(BLIP_PACKS_GET_RESOURCE, {
            resourceName,
            value
        });
    }
}