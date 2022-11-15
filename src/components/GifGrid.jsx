import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {isLoading ? (
                <h1>Cargando</h1>
            ) : (
                <div className="card-grid">
                    {images.map((image) => (
                        <GifGridItem key={image.id} {...image} />
                    ))}
                </div>
            )}
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
