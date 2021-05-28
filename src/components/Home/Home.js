import React from "react";
import Header from "../Header/Header";
import NewsFeed from "../NewsFeed/NewsFeed";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <NewsFeed />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
