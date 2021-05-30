import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./pages/loading.page";
import routes from "./routes/routes";
import { Suspense, useEffect } from "react";
import { useDispatch } from 'react-redux';
import PrivateRoute from "./routes/PrivateRoute";
import AuthRedirectRoute from "./routes/AuthRedirectRoute";
import { verifyToken } from './utils/jwt';
require('dotenv').config();

function App() {
    const dispatch = useDispatch();
    const onStateChanged = () => {
        const access_token = sessionStorage.getItem('token') || null;
        const verifiedToken = verifyToken(access_token);
        console.log(process.env.JWT_SECRET_KEY);
        console.log(verifiedToken);
        dispatch({ type: "AUTH_USER", payload: verifiedToken });

    }
    // eslint-disable
    useEffect(onStateChanged, [dispatch])
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        {routes.map((route, i) => {
                            return route.authorization === "private" ? (
                                <PrivateRoute
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ) : route.authorization === "IfAuthRedirectBack" ? (
                                <AuthRedirectRoute
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ) : (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            );
                        })}
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
