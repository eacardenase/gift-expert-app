import PropTypes from 'prop-types';

export const GifGridItem = ({ url, title }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            {title && <p>{title}</p>}
        </div>
    );
};

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
