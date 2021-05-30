import { lazy } from "react";

// const DashboardPage = lazy(() =>
//     import(/*webpackChunkName:'Dashboard/DashboardPage'*/ "../pages/dashboard.page")
// );
const HomePage = lazy(() =>
    import(/*webpackChunkName:'App/HomePage' */ "../pages/home.page")
);
const BlogDetails = lazy(() =>
    import(/*webpackChunkName:'App/BlogDetails' */ "../pages/blog-details.page")
);
const ProfilePage = lazy(() =>
    import(/*webpackChunkName:'App/ProfilePage' */ "../pages/profile.page")
);
const LoginPage = lazy(() =>
    import(/*webpackChunkName:'App/LoginPage' */ "../pages/login.page")
);
const SignupPage = lazy(() =>
    import(/*webpackChunkName:'App/SignupPage' */ "../pages/signup.page")
);
const NotFoundPage = lazy(() =>
    import(/*webpackChunkName:'App/404' */ "../pages/notFound.page")
);

const routes = [
    // {
    //     path: "/dashboard",
    //     authorization: "private",
    //     exact: true,
    //     component: DashboardPage,
    // },

    {
        path: "/blog/:postId",
        exact: true,
        component: BlogDetails
    },
    {
        path: "/profile",
        authorization: "private",
        exact: true,
        component: ProfilePage,
    },
    { path: ["/login", "/signin"], authorization: "IfAuthRedirectBack", exact: true, component: LoginPage },
    { path: ["/signup", "/register"], authorization: "IfAuthRedirectBack", exact: true, component: SignupPage },
    { path: ["/", "/home"], exact: true, component: HomePage },
    { path: "*", exact: true, component: NotFoundPage },
];

export default routes;