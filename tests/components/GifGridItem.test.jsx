import { describe, test, expect, beforeEach } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { GifGridItem } from '../../src/components';

describe('<GifGridItem />', () => {
    beforeEach(cleanup);

    const title = 'Test title';
    const url = 'www.google.com';

    test('should match with the snapshoot', () => {
        const { container } = render(<GifGridItem url={url} title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('should show the image with respective url and alt text', () => {
        render(<GifGridItem url={url} title={title} />);

        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show title on component', () => {
        render(<GifGridItem url={url} title={title} />);

        expect(screen.getByText(title)).toBeDefined();
    });
});
