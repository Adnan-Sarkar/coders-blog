import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrawPolygon } from "@fortawesome/free-solid-svg-icons";
import "../../components/Profile/Profile.css";
import { useState } from "react";

import { Link, useRouteMatch } from "react-router-dom";


import PictureReusableComponent from "../../components/Profile/Picture.reusable";
import BioReusableComponent from "../../components/Profile/Bio.reusable";
import Header from "../Header/Header";

export default function ProfileLayout(props) {
    const profileData = {
        _id: 454,
        profilePic:
            "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.6435-0/cp0/e15/q65/p320x320/69741904_1224522101051527_3210760247312384000_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoiYiJ9&_nc_ohc=CAFgPMRRPxAAX93dqjl&_nc_ht=scontent.fmaa1-2.fna&tp=3&oh=08e9cfb046bd81b7176be4a2f287cf9f&oe=60D8A352",
        coverPic:
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.6435-9/75610880_114314370015570_2188285841606967296_n.png?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=FIVxX5W6Z0UAX_xn4-7&_nc_ht=scontent.fmaa1-1.fna&oh=de5bd35ce2039742727dda9c9b2f8333&oe=60D6C123",
        name: "Samayun MC",
        nickname: "সামু",
        bio: "I is a Third Person Singular Number. My crush IoT,PWA,Realtime Applications"
    }
    const [profile] = useState(profileData);
    let { url } = useRouteMatch();
    const tabIcon = <FontAwesomeIcon icon={faDrawPolygon} />
    return (
        <>
            <Header />
            <Container fluid className="bg-white">
                <PictureReusableComponent profile={profile} />

                <BioReusableComponent profile={profile} />
                <Container >
                    <Navbar expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                {url}
                                <Link className={`nav-item-custom ${url === '/profile' && 'active'}`}
                                    to={`${url}/about`}>About</Link>
                                <Link className={`nav-item-custom ${url === '/profile/posts' && 'active'}`}
                                    to={`${url}/posts`}>Posts</Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>

            <Container fluid className="bg-light">
                {props.children}
            </Container>

        </>
    );
}
