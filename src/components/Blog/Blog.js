// import moment from "moment";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
    const { _id, tags, title, body, image, author } = props.blog;
    return (
        <div className="col-md-6 mb-5">
            <Card className='singleCard'>
                <Link to={`/blog/${_id}`}>
                    <Card.Img className='card-img' variant="top" src={image} style={{ height: "15rem" }} />
                </Link>
                <Card.Body className='pb-5'>
                    <div className="category">
                        {tags.map(tag => <span key={tag}> {tag} </span>)}
                    </div>
                    <Card.Title className='card-title'>
                        <Link to={`/blog/${_id}`}>{title}</Link>
                    </Card.Title>
                    <Card.Text className='card-description'>{body}</Card.Text>
                </Card.Body>
                <div className="card-footer">
                    <h5>
                        {!author?.profilePic && <img
                            src={`https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg`}
                            className="w-25 img-sm img-thumbnail img-rounded img-circle"
                            alt={author?.username} />}
                        <Link to={`/user/${author?.username}`}>
                            {author?.name}
                        </Link>
                    </h5>
                    {/* <p>{createdAt.moment().format('lll')}</p> */}
                </div>
            </Card>
        </div>
    );
};

export default Blog;
