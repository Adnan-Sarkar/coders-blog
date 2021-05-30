import { getSinglePostAction } from "../store/actions/post.action";
import { Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/Header/Header";
import "./BlogDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Loading from "./loading.page";
import { createCommentAction } from "../store/actions/comment.action";

const BlogDetails = () => {
    const { postId } = useParams();
    const auth = useSelector(state => state.auth);
    const post = useSelector(state => state.post.post);
    const dispatch = useDispatch();
    const fetchPosts = () => {
        dispatch(getSinglePostAction(postId));
    }
    // eslint-disable-next-line
    useEffect(fetchPosts, [])


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = credentials => {
        console.log({
            ...credentials,
            post: postId,
            user: auth?.user?._id,
            status: "on",
            replies: []
        });
        dispatch(createCommentAction({
            ...credentials,
            post: postId,
            user: auth?.user?._id,
            status: "on",
            replies: []
        }));
        // reset();
    }
    return (
        <>
            <Header />

            <div className="container">
                <Breadcrumb className="mt-4 blog-breadcrumb">
                    <Breadcrumb.Item>
                        <Link to="/home">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active> {post?.title} </Breadcrumb.Item>
                </Breadcrumb>


                {post ? <div className="blog-details">
                    <div className="title-img">
                        <img
                            className="img-fluid"
                            src={post?.image}
                            alt={post?.title}
                        />
                    </div>
                    <div className="blog-content">
                        <div className="blog-title">
                            <h2 className="title-heading">
                                {post?.title}
                            </h2>
                        </div>
                        <div className="blog-head">
                            <div className="blog-category">
                                {post?.tags?.map(tag => <span key={tag} className="title-category"> {tag} </span>)}
                            </div>
                            <div className="blog-owner">
                                <span>Post by: {post?.author?.name} </span>
                            </div>
                        </div>
                        <div className="details">
                            <p>
                                {post?.body}
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
                            {errors.body && <p className="text-center text-danger">Please write something...</p>}
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <textarea
                                    {...register("body", { required: true })}

                                    placeholder="Write comment"
                                    className='form-control comment' cols="" rows=""></textarea>
                                <button type="submit" className="btn btn-warning"> Post </button>
                            </form>
                        </div>
                    </div>
                </div> : <Loading />
                }
            </div>
        </>
    );
};

export default BlogDetails;