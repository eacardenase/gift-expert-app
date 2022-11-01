import PropTypes from 'prop-types';

const GifGridItem = ({ url, title }) => {
    console.log(url);
    console.log(title);

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

export default GifGridItem;
