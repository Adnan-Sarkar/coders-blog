import React from "react";
import Blog from "../Blog/Blog";
import "./NewsFeed.css";
import fakedata from '../../fakedata/fakedata.json';

const NewsFeed = () => {
    return (
        <div className="newsfeed">
            <div className="title mb-5">
                <h3>Blogs</h3>
            </div>
            <div className="newsfeed-content">
                <div className="row justify-content-between">
                    {
                        fakedata.map(blog => <Blog blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;
