import React from 'react';

import './Signup.css';
import loginImg from '../../images/login.jpg'
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
            <div className="container">
                <div className="login-page">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="login-img">
                                <img src={loginImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form">
                                <h2>Signup Here😎</h2>
                                <form action="">
                                    <input className='my-input' id="name" type="text" placeholder="First Name" />
                                    <label className='login-label' htmlFor="name">First Name</label>

                                    <input className='my-input' id="name" type="text" placeholder="Last Name" />
                                    <label className='login-label' htmlFor="name">Last Name</label>
    
                                    <input className='my-input' id='email' type="email" placeholder="Your Email" />
                                    <label className='login-label' htmlFor="email">Your Email</label>
    
                                    <input className='my-input' id='password' type="password" placeholder="Your Password" />
                                    <label className='login-label' htmlFor="password">Your Password</label>

                                    <input className='my-input' id='password' type="password" placeholder="Confirm Password" />
                                    <label className='login-label' htmlFor="password">Confirm Password</label>

                                    <input className='' type="radio" value="" id="flexCheckDefault" />
                                    <label className='' for="flexCheckDefault">Blogger</label> 

                                    <input className='' type="radio" value="" id="flexCheckDefault" />
                                    <label className='' for="flexCheckDefault">Commenter</label> <br />
                                   
    
                                    <button as={Link} to='/' className="btn btn-warning">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Signup;