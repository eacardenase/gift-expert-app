import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
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
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ol>

            {/* Gif Item */}
        </>
    );
};

export default GifExpertApp;
