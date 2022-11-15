import { describe, test, expect, vi, beforeEach } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

const testInput = 'Saitama';
const onAddCategory = vi.fn();

describe('<AddCategory />', () => {
    beforeEach(() => {
        cleanup();

        onAddCategory.mockImplementation(() => {});
        onAddCategory.mockClear(() => {});
    });

    test('should change text input value', () => {
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {
            target: {
                value: testInput,
            },
        });

        expect(input.value).toBe(testInput);

        // screen.debug();
    });

    test('should call onAddCategory if input is not empty', () => {
        render(<AddCategory onAddCategory={onAddCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {
            target: {
                value: testInput,
            },
        });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategory).toBeCalledTimes(1);
        expect(onAddCategory).toBeCalledWith(testInput);

        // screen.debug();
    });

    test('should not call onAddCategory if input is empty', () => {
        render(<AddCategory onAddCategory={onAddCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // screen.debug();

        expect(onAddCategory).not.toBeCalled();
    });
});
