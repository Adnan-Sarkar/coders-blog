import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import profile from "../../images/profile.jpg";
import { Modal, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutAction } from "../../store/actions/auth.action";
import { useForm } from "react-hook-form";
import { createPostAction } from "../../store/actions/post.action";

const Header = () => {
    const [image, setImage] = useState();
    const authUser = useSelector((state) => state.auth);
    const post = useSelector(state => state.post);
    const modal = useSelector((state) => state.post.modal);
    const dispatch = useDispatch();

    const handleToggleCreatePost = () => {
        dispatch({ type: "TOGGLE_MODAL" });
    };
    const handleLogout = () => {
        dispatch(signOutAction());
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = credentials => {
        dispatch(createPostAction({
            ...credentials,
            image
        }));
        // reset();
    }
    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        let base64String = btoa(binaryString);
        base64String = `data:image/png;base64,${base64String}`
        setImage(base64String);
    }
    const handleImage = e => {

        let file = e.target.files[0];
        let fileIsImage = file.type.includes('image/');

        file.type.split('/') === '' && setImage(file);
        let extension = /(png|gif|jpg|jpeg|webp)/i.test(file.type.split('/')[1])
        if (!fileIsImage || !extension) {
            alert('File Format Is Invalid . Please Upload in image');
            setImage(undefined)
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
            console.log(reader)
        }
    }
    return (
        <>
            <div className="header">
                <div className="container">
                    <ul className="navigation">
                        <li className="list-1">
                            <Link to="/">
                                <img src="/logo192.png" alt="Coder's Blog" />
                                <span>
                                    <strong> Coder's Blog </strong>
                                </span>
                            </Link>
                        </li>
                        {/* <li className="list-2">
                            <input
                                className="header-search"
                                type="text"
                                placeholder="Search"
                            />
                            <div className="notification">
                                <FontAwesomeIcon
                                    className="notification-icon"
                                    icon={faBell}
                                />
                                <span className="notification-count"></span>
                            </div>
                        </li> */}

                        {authUser?.user?.email && authUser?.user?.role === "blogger" && (
                            <li className="list" onClick={handleToggleCreatePost}>
                                <FontAwesomeIcon
                                    className="notification-icon"
                                    icon={faPlusSquare}
                                />
                            </li>
                        )}.
                        {authUser?.user?.email && (
                            <li className="list">
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    Logout  </button>
                            </li>
                        )}
                        {!authUser?.user?.email && (
                            <li className="list">
                                <Link to="/signin" className="text-secondary p-3">
                                    Signin
                                </Link>
                            </li>
                        )}
                        {!authUser?.user?.email && (
                            <li className="list">
                                <Link to="/signup" className="text-secondary p-3">
                                    SignUp
                                </Link>
                            </li>
                        )}
                        {authUser?.user?.email && (
                            <li className="list-3">
                                <div className="profile">
                                    <div className="profile-pic">
                                        <img
                                            src={`https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="profile-name">
                                        <h5>{authUser?.user?.name}</h5>
                                        <ul id="nav-ul" className="dropdown">
                                            <li className="dropdown-item" id="nav-li">
                                                <Link to="/profile">Profile</Link>
                                            </li>
                                            {authUser?.user?.email &&
                                                authUser?.user?.role === "blogger" && (
                                                    <li
                                                        className="dropdown-item"
                                                        id="nav-li"
                                                        onClick={handleToggleCreatePost}
                                                    >
                                                        Create Post
                                                    </li>
                                                )}
                                            <li
                                                className="dropdown-item"
                                                id="nav-li"
                                                onClick={handleLogout}
                                            >
                                                Log out
                      </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="navbar-mobile">
                <Navbar
                    className="d-flex justify-content-between text-white"
                    bg="primary"
                    expand="lg"
                >
                    <Navbar.Brand className="text-white nav-heading" to="/home">
                        Coders Blog
          </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-mobile-main text-center">
                            {authUser?.user?.email && (
                                <div className="profile d-flex justify-content-center mb-4">
                                    <div className="profile-pic">
                                        <img
                                            src={`https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="profile-name">
                                        <h5>{authUser?.user?.name}</h5>
                                    </div>
                                </div>
                            )}
                            <input
                                className="header-search m-auto mt-4 mb-4"
                                type="text"
                                placeholder="Search"
                            />
                            {authUser?.user?.email && (
                                <Nav.Link className="navbar-mobile-item" href="/profile">
                                    Profile
                                </Nav.Link>
                            )}
                            {authUser?.user?.email && authUser?.user?.role === "blogger" && (
                                <Nav.Link
                                    className="navbar-mobile-item"
                                    onClick={handleToggleCreatePost}
                                > Create Post
                                </Nav.Link>
                            )}

                            {authUser?.user?.email && (
                                <Nav className="navbar-mobile-item" onClick={handleLogout}>
                                    LogOut
                                </Nav>
                            )}
                            {!authUser?.user?.email && (
                                <Nav.Link className="navbar-mobile-item" href="/signin">
                                    Login
                                </Nav.Link>
                            )}
                            {!authUser?.user?.email && (
                                <Nav.Link className="navbar-mobile-item" href="/signup">
                                    Register
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <Modal
                show={modal}
                onHide={handleToggleCreatePost}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Create Post
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form " onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <span className="text-danger"> {post?.error} </span>
                        </div>
                        <div className="input-group form-group mt-3 ">
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                className={`form-control ${errors.title && 'is-invalid'} `}
                                placeholder={errors.title ? 'Title is required' : 'Enter Post\'s Title'} />
                        </div>
                        <div className="input-group form-group mt-3 ">
                            <input
                                type="text"
                                {...register("slug", { required: true })}
                                className={`form-control ${errors.slug && 'is-invalid'} `}
                                placeholder={errors.slug ? 'Slug is required' : 'URL friendly slug of title: eg: react-is-awesome'} />
                        </div>
                        <div className="d-block">
                            <img src={image}
                                alt={image} className="w-100" />
                        </div>
                        <div className="input-group form-group mt-3">
                            <input
                                type="file"
                                {...register("image", { required: true })}
                                onChange={handleImage}
                                className={`form-control ${errors.image && 'is-invalid'} `}
                                placeholder="Image" />

                        </div>
                        <div className="input-group form-group mt-3">
                            <textarea
                                {...register("body", { required: true })}
                                className={`form-control ${errors.body && 'is-invalid'} `}
                                placeholder={errors.body ? 'body is required' : 'Enter  body'} >
                            </textarea>

                        </div>
                        <input type="hidden" value={authUser?.user?._id} />
                        <div className="input-group form-group mt-3 ">
                            <input
                                type="text"
                                {...register("tags", { required: true })}
                                className={`form-control ${errors.tags && 'is-invalid'} `}
                                placeholder={errors.tags ? 'tags is required' : 'Enter  tags'} />
                        </div>
                        <div className="form-group mt-3 d-block text-center">
                            <button type="submit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faUserPlus} /> Create
                    </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
