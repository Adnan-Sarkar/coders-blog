import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import "./Blog.css";

const Blog = (props) => {
    const { category, title, description, img, date, profileName } = props.blog;
    return (
        <div className="col-md-6 mb-5">
            <Card className="singleCard">
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body className="pb-5">
                    <div className="blog-highlights d-flex justify-content-between align-items-center mb-3">
                        <div className="category">
                            <p>{category}</p>
                        </div>
                        <div className="blog-option">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                ></Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        report as spammer
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        delete all comment for this post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        turn off comment
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        schedule turn off comment
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        delete post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        edit post
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' href="">
                                        copy link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text className="card-description">
                        {description}
                    </Card.Text>
                </Card.Body>
                <div className="card-footer">
                    <h5>{profileName}</h5>
                    <p>{date}</p>
                </div>
            </Card>
        </div>
    );
};

export default Blog;
