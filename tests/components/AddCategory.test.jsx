import { describe, test, expect, vi } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe('<AddCategory />', () => {
    test('should change text input value', () => {
        const onAddCategory = vi.fn();

        onAddCategory.mockImplementation(() => {});
        onAddCategory.mockClear(() => {});

        const testInput = 'Saitama';

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
});
