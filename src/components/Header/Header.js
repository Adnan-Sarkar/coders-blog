import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/profile.jpg";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <ul className="navigation">
                        <li className="list-1">
                            <h3>Coders Blog</h3>
                        </li>
                        <li className="list-2">
                            <input className='header-search' type="text" placeholder="Search" />
                            <div className="notification">
                                <FontAwesomeIcon
                                    className="notification-icon"
                                    icon={faBell}
                                />
                                <span className="notification-count"></span>
                            </div>

                        </li>
                        <li className="list-3">
                            <div className="profile">
                                <div className="profile-pic">
                                    <img src={profile} alt="" />
                                </div>
                            <div className="profile-name">
                                <h5>Adnan</h5>
                                <ul id="nav-ul" class="dropdown">
                                    <li id="nav-li"><a id="nav-a" href="">Profile</a></li>
                                    <li id="nav-li"><a id="nav-a" href="">Log out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-mobile">
                <Navbar className="d-flex justify-content-between text-white" bg='primary' expand="lg">
                    <Navbar.Brand className='text-white nav-heading' to="/home">Coders Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-mobile-main text-center">
                            <div className="profile d-flex justify-content-center mb-4">
                                <div className="profile-pic">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="profile-name">
                                    <h5>Adnan</h5>
                                </div>
                            </div>
                            <input className='header-search m-auto mt-4 mb-4' type="text" placeholder="Search" />
                            <Nav.Link className='navbar-mobile-item' href="/home">Profile</Nav.Link>
                            <Nav.Link className='navbar-mobile-item' href="/home">LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
