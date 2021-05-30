import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './PostCard.css';
import CreatePostComponent from './CreatePost.component';

export default function PostListComponent(props) {
    const upvoteHandler = postId => props.handleUpvote(postId)
    const downvoteHandler = postId => props.handleDownvote(postId)
    return (
        <div className=" pt-5" style={{ backgroundColor: '#f0f2f5' }}>
            {/* Facebook Status Form */}

            <CreatePostComponent />
            {/* Facebook Post Showing */}

            {
                props.data && props.data.length > 0 ? props.data.map(post =>

                    <Card>
                        <Card.Body>
                            <Card.Title> <Image className="userImg" src={post?.author?.profilePic} rounded /> {post.title} </Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={post?.image} />
                        <div className=" btn-style">
                            <button onClick={() => upvoteHandler(post?._id)}>
                                <FontAwesomeIcon icon={faHeart} size="lg" color={"red"} /> {8}
                            </button>

                            <button onClick={() => downvoteHandler(post?._id)}>
                                <FontAwesomeIcon icon={faThumbsDown} size="lg" color={"blue"} /> {8}
                            </button>

                            {/* <button onClick={() => setCommentColor(commentColor ? '' : 'red') }><FontAwesomeIcon icon={faCommentAlt} size="lg" color={commentColor} /></button> */}
                            {/* <button><FontAwesomeIcon icon={faShare} size="lg" /></button> */}
                        </div>
                    </Card>

                ) : (
                    <Card className="p-5">
                        No Posts Found
                    </Card>
                )
            }
        </div>
    )
}
