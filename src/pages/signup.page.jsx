import './Login.css';
import loginImg from '../images/login.jpg'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../store/actions/auth.action';
import MainAppLayout from '../layout/MainApp.layout';

const Signup = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = credentials => {
        dispatch(signUpAction(credentials));
        // reset();
    }
    return (
        <MainAppLayout>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="login-page">
                    <div className="row align-items-center">
                        <div className="col-md-6">

                            <div className="login-form">
                                <h2>Signup Here 😎</h2>

                                <h4 className="text-danger">{auth.error}</h4>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <label className='login-label' htmlFor="name"> Name</label>
                                    {errors.name && (
                                        <p className="text-center text-danger"> Name is required </p>
                                    )}
                                    <input
                                        className={`my-input m-2 p-2 ${errors.name && "is-invalid"} `}
                                        id='email'
                                        type="text"
                                        {...register("name", { required: true })} placeholder="Your Name" />

                                    <label className='login-label' htmlFor="username"> Username </label>
                                    {errors.username && (
                                        <p className="text-center text-danger"> Please provide valid email address </p>
                                    )}
                                    <input
                                        className={`my-input m-2 p-2 ${errors.username && "is-invalid"} `}
                                        id='username'
                                        type="text"
                                        {...register("username", { required: true })} placeholder="Your username" />

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

                                    {errors.role && <p className="error text-danger">{errors.role.message}</p>}

                                    <label>
                                        <input
                                            {...register("role", { required: "Role is required" })}
                                            name="role"
                                            value="blogger"
                                            type="radio"
                                            className="my-3 p-3"
                                        /> Blogger </label>
                                    <label>
                                        <input
                                            {...register("role", { required: "Role is required" })}
                                            name="role"
                                            value="commenter"
                                            type="radio"
                                            className="my-3 p-3"
                                        /> Commenter </label>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning mt-3">Signup</button>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/signin">Already have account please, sign in here </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="login-img">
                                <img src={loginImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainAppLayout>
    );
};

export default Signup