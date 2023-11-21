import { useLoaderData } from "react-router-dom";
import DetailsNews from "./DetailsNews";
// eslint-disable-next-line no-unused-vars
import React from "react";


const News = () => {
    const news = useLoaderData();
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <div>
            <h2>comming soon...asib {details}</h2>
            {console.log(details)}
            {/* {
                news.map(p => <DetailsNews key={p._id} news ={news}></DetailsNews>)
            } */}
        </div>
    );
};

export default News;