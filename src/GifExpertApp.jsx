import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (
            categories
                .map((category) => category.toLowerCase())
                .includes(newCategory.toLowerCase())
        )
            return;

        // setCategories((categories) => [ newCategory, ...categories]);
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onAddCategory={onAddCategory} />

            {/* Listado de Gifs */}
            <ol>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ol>

            {/* Gif Item */}
        </>
    );
};

export default GifExpertApp;
