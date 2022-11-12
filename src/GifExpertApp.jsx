import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

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
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;
