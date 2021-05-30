import { useState } from 'react';
import postData from '../../../postData/postData.json';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeadphonesAlt, faVideo, faImage } from '@fortawesome/free-solid-svg-icons';
import './PostCard.css';

export default function PostCardComponent() {

    const userPosts = postData;
    const [likeColor, setLikeColor] = useState('');

    // const [commentColor, setCommentColor] = useState('');
    // console.log(userPosts);

    //Handle React btn Color and Data manage
    const handleLike = (id) => {
        console.log(id)
        setLikeColor(likeColor ? '' : 'red')
    }

    return (
        <div className="container mt-5 pt-5" style={{ backgroundColor: '#f0f2f5' }}>
            {/* Facebook Status Form */}

            <div>
                <input className="form-control status-form" type='text' placeholder="What's on your mind"></input>
                <div className="status-btn m-3 text-center">
                    <button><FontAwesomeIcon icon={faHeadphonesAlt} size="lg" /> <span className="p-2">Live</span></button>
                    <button><FontAwesomeIcon icon={faVideo} size="lg" /> <span className="p-2">Video</span></button>
                    <button><FontAwesomeIcon icon={faImage} size="lg" /> <span className="p-2">Image</span></button>
                </div>
            </div>

            {/* Facebook Post Showing */}
            <div>
                {
                    userPosts.map(post =>
                        <div className='m-5'>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <Image className="userImg" src={post.userImg} rounded /> {post.name} </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={post.postImg} />
                                <div className=" btn-style">
                                    <button onClick={() => handleLike(post.id)}><FontAwesomeIcon icon={faHeart} size="lg" color={likeColor} /></button>
                                    {/* <button onClick={() => setCommentColor(commentColor ? '' : 'red') }><FontAwesomeIcon icon={faCommentAlt} size="lg" color={commentColor} /></button> */}
                                    {/* <button><FontAwesomeIcon icon={faShare} size="lg" /></button> */}
                                </div>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
