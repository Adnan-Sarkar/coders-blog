import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom'
import ENDPOINT from './endpoints';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth);
  const location = useLocation();
  // let { from } = location.state || { from: { pathname: ENDPOINT.LOGIN, state: location.state } };
  let from = {
    pathname: ENDPOINT.LOGIN,
    state: { from: location }
  }
  return (
    // {
    //   pathname: from,
    //   state: { from: location }
    // }
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to loginRoute
    <Route {...rest} render={props => (
      !!auth?.user?.email ?
        <Component {...props} />
        : <Redirect to={from} />
    )} />
  );
};
export default PrivateRoute