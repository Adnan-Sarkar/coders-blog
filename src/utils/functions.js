import { useDispatch } from 'react-redux';
import { verifyToken } from './jwt';
// const dispatch = useDispatch();

const onStateChanged = () => {
    const access_token = sessionStorage.getItem('token') || null;
    const verifiedToken = verifyToken(access_token);
    console.log(process.env.JWT_SECRET_KEY);
    console.log(verifiedToken);
    // dispatch({ type: "AUTH_USER", payload: verifiedToken });

}

window.onStateChanged = onStateChanged