// eslint-disable-next-line no-unused-vars
import React from 'react';

const DetailsNews = ({news}) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <div>
            <p>{details}</p>
        </div>
    );
};

export default DetailsNews;