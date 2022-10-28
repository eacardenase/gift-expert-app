import PropTypes from 'prop-types';

import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* {gifs.length &&
                gifs.map(({ url, id }) => {
                    return (
                        <div key={id}>
                            <img src={url} alt="gif" />
                        </div>
                    );
                })} */}
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
