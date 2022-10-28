export const getGifs = async (category) => {
    const categoryCleaned = category.replace(' ', '-');

    const url = `https://api.giphy.com/v1/gifs/search?api_key=60r65gesvwiJUZsgBemkHIEViuiEbHjp&q=${categoryCleaned}&limit=15`;

    try {
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifsData = data.map(({ id, title, images }) => {
            return {
                id,
                url: images.downsized_medium.url,
                title,
            };
        });

        console.log(gifsData);

        return gifsData;
    } catch (error) {
        console.log(error);
    }
};
