import { renderHook } from '@testing-library/react-hooks';

import { useCustomEvent, useEmitter, useListener } from './index';

describe('useCustomEvents', () => {
    it('should add a listener and dispatch the event', () => {
        const callback = jest.fn();

        const { result } = renderHook(() =>
            useCustomEvent({
                eventName: 'microfrontSampleCustomEvent',
                eventToListen: callback,
            }),
        );

        result.current();

        expect(callback).toHaveBeenCalled();
    });

    it('should always return a callEvent function', () => {
        const { result } = renderHook(() =>
            useCustomEvent({
                eventName: 'microfrontSampleCustomEvent',
            }),
        );

        expect(result.current).toBeInstanceOf(Function);
    });

    it('should test useListener and useEmitter independently', () => {
        const callback = jest.fn();

        renderHook(() =>
            useListener({
                eventName: 'microfrontSampleCustomEvent',
                eventToListen: callback,
            }),
        );

        const { result } = renderHook(() =>
            useEmitter({
                eventName: 'microfrontSampleCustomEvent',
            }),
        );

        result.current();

        expect(callback).toHaveBeenCalled();
    });

    it('should not add a listener if the eventToListen parameter is invalid', () => {
        const callback = jest.fn();

        renderHook(() =>
            useListener({
                eventName: 'microfrontSampleCustomEvent',
            }),
        );

        const { result } = renderHook(() =>
            useEmitter({
                eventName: 'microfrontSampleCustomEvent',
            }),
        );

        result.current();

        expect(callback).not.toHaveBeenCalled();
    });
});
