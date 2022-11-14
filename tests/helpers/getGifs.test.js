import { describe, test, expect } from 'vitest';

import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs() helper', () => {
    test('should return an array of gifs', async () => {
        const testCategory = 'one punch';
        const gifs = await getGifs(testCategory);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

        // expect(gifs[0]).toHaveProperty('title');
    });
});
