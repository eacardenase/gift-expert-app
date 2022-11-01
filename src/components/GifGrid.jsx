import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);

        setImages(newImages);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {images.map(({ url, id }) => {
                    return (
                        <li key={id}>
                            <img src={url} alt="gif" />
                        </li>
                    );
                })}
            </ol>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
