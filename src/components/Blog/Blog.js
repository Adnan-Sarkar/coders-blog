import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const Blog = (props) => {
    const {category, title, description, img, date, profileName } = props.blog;
    return (
        <div className="col-md-6 mb-5">
            <Card className='singleCard'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body className='pb-5'>
                    <div className="category">
                        <p>{category}</p>
                    </div>
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <Card.Text className='card-description'>{description}</Card.Text>
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
