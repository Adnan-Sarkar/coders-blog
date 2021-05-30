import './Login.css';
import loginImg from '../images/login.jpg'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../store/actions/auth.action';
import MainAppLayout from '../layout/MainApp.layout';

const Login = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = credentials => {
        dispatch(signInAction(credentials));
        // reset();
    }
    return (
        <MainAppLayout>
            <br />
            <br />
            <br />
            <br />
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
                                <h4 className="text-danger">{auth.error}</h4>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <label className='login-label' htmlFor="email">Your Email</label>
                                    {errors.email && (
                                        <p className="text-center text-danger"> Please provide valid email address </p>
                                    )}
                                    <input
                                        className={`my-input m-2 p-2 ${errors.email && "is-invalid"} `}
                                        id='email'
                                        type="email"
                                        {...register("email", { required: true })} placeholder="Your Email" />


                                    {errors.password && (
                                        <p className="text-center text-danger"> Password is required & at least 6 character </p>
                                    )}
                                    <label className='login-label' htmlFor="password">Your Password</label>
                                    <input
                                        {...register("password", { required: true, minLength: 6 })}
                                        className='my-input' id='password' type="password" placeholder="Your Password" />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning mt-3">Login</button>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/signup"> Don't have account please, sign up here </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainAppLayout>
    );
};

export default Login