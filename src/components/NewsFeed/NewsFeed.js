import React from "react";
import Blog from "../Blog/Blog";
import "./NewsFeed.css";

const NewsFeed = ({ blogs }) => {
    return (
        <div className="newsfeed">
            <div className="title mb-5">
                <h3>Blogs</h3>
            </div>
            <div className="newsfeed-content">
                <div className="row justify-content-between">
                    {
                        blogs?.map(blog => <Blog blog={blog} key={blog._id} />)
                    }
                </div>
                <h3> {blogs.length < 1 && `No Post Found`} </h3>
            </div>
        </div>
    );
};

export default NewsFeed;
