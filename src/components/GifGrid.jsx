import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
