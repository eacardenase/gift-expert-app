import { useState } from 'react';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        // setCategories((cat) => [ 'Programming', ...cat,]);
        setCategories(['Programming', ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <button onClick={onAddCategory}>Agregar</button>
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
