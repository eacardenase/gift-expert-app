import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newInputValue = inputValue.trim();

        if (newInputValue.length < 2) return;

        onAddCategory(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
