import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./BlogDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const BlogDetails = () => {
    return (
        <>
            <Header />

            <div className="container">
                <Breadcrumb className="mt-4 blog-breadcrumb">
                    <Breadcrumb.Item>
                        <Link to="/home">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Blog Details</Breadcrumb.Item>
                </Breadcrumb>

                <div className="blog-details">
                    <div className="title-img">
                        <img
                            className="img-fluid"
                            src="https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg"
                            alt=""
                        />
                    </div>
                    <div className="blog-content">
                        <div className="blog-title">
                            <h2 className="title-heading">
                                Nature is a god gift it is our duty to protect
                            </h2>
                        </div>
                        <div className="blog-head">
                            <div className="blog-category">
                                <p className="title-category">Food</p>
                            </div>
                            <div className="blog-owner">
                                <span>Post by: Adnan</span>
                            </div>
                        </div>
                        <div className="details">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A nobis, cumque neque facilis
                                error praesentium soluta officia quis
                                consequuntur alias numquam accusamus corrupti.
                                Nobis impedit, vero itaque facere magni aperiam.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus placeat nihil
                                cupiditate dolorum rem deserunt? Eum suscipit
                                vitae libero dicta, sint perferendis sit
                                assumenda soluta saepe facilis? Minima.
                            </p>

                            <p>
                                Sit amet consectetur adipisicing elit. Accusamus
                                consequuntur neque ullam provident blanditiis,
                                voluptas quibusdam modi odio doloremque dolorum
                                porro inventore expedita quae vero quas a
                                quaerat accusantium ipsum? Lorem ipsum, dolor
                                sit amet consectetur adipisicing elit. Dolorem
                                nesciunt et delectus eius sequi recusandae ab
                                numquam deleniti hic laboriosam! Possimus
                                voluptatem at quam non adipisci, est ut
                                inventore perspiciatis vitae. Eius sunt corporis
                                veniam. Velit pariatur voluptate repellat
                                consectetur porro, saepe laudantium vitae
                                officiis laborum minus ut quidem dolore aut rem
                                optio placeat deleniti ipsa quaerat nulla!
                                Temporibus quos iusto omnis culpa nihil, animi,
                                voluptates excepturi atque aut dolorem
                                laboriosam vel veritatis ipsa maiores itaque
                                quod laborum laudantium dolore. Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Explicabo sunt nam praesentium optio. Eius ipsa,
                                debitis nam aut necessitatibus enim sint officia
                                culpa quibusdam, unde exercitationem modi est
                                facere. Explicabo, exercitationem? In suscipit
                                dolorem, architecto recusandae libero
                                perferendis modi tempora harum ducimus non. Quae
                                deserunt dolores pariatur quia id doloremque!
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Placeat non ipsam ratione,
                                temporibus ea corporis sunt quibusdam, pariatur
                                culpa minus ab sequi et possimus libero modi!
                                Atque possimus quibusdam delectus quas alias
                                unde! Quos ipsum, eius cum, corrupti modi optio
                                natus fuga iusto nobis alias commodi consectetur
                                fugit odio explicabo distinctio. Dolore ullam
                                veniam maxime magnam veritatis, ratione atque
                                voluptatem.
                            </p>

                            <p>
                                Dolor sit amet consectetur, adipisicing elit.
                                Voluptatem reprehenderit natus nulla veritatis
                                ratione suscipit! Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Nam ullam sapiente
                                rem adipisci voluptate labore rerum
                                exercitationem deserunt velit. Iusto?
                            </p>
                        </div>
                        <div className="blog-react">
                            <FontAwesomeIcon
                                className="blog-react-icon"
                                icon={faHeart}
                            />
                            <div className="comment-details">
                                <span>5 commnets</span>
                                <FontAwesomeIcon
                                    className="blog-comment-icon"
                                    icon={faComment}
                                />
                            </div>
                        </div>
                        <div className="add-comment">
                            <form action="">
                                <textarea placeholder="Write comment" className='form-control comment' name="" id="" cols="" rows=""></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
