import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/profile.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <ul className="navigation">
                    <li className="list-1">
                        <h3>Coders Blog</h3>
                    </li>
                    <li className="list-2">
                        <input type="text" placeholder="Search" />
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
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
