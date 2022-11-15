import { describe, test, expect, beforeEach, vi } from 'vitest';

import { screen, render, cleanup } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vi.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid />', () => {
    beforeEach(cleanup);

    const category = 'One Punch';

    test('should show loading message', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);

        // screen.debug();

        expect(screen.getByText(category));
        expect(screen.getByText('Cargando'));
    });

    test('should show items when images are loaded by useFetchGifs()', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
