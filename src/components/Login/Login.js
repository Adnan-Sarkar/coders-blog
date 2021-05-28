import React from 'react';
import './Login.css';
import loginImg from '../../images/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
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
                            <h2>Login Here 😎</h2>
                            <form action="">
                                <input className='my-input' id="name" type="text" placeholder="Your Name" />
                                <label className='login-label' htmlFor="name">Your Name</label>

                                <input className='my-input' id='email' type="email" placeholder="Your Email" />
                                <label className='login-label' htmlFor="email">Your Email</label>

                                <input className='my-input' id='password' type="password" placeholder="Your Password" />
                                <label className='login-label' htmlFor="password">Your Password</label>

                                <button as={Link} to='/' className="btn btn-warning">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;