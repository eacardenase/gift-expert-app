import { describe, test, expect } from 'vitest';

import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetch() custom hook', () => {
    const category = 'One punch';

    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { current } = result;

        expect(current).toEqual({
            images: expect.any(Array),
            isLoading: expect.any(Boolean),
        });
        expect(current.images.length).toBe(0);
        expect(current.isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading as false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 2000,
            }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
