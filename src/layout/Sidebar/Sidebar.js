import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css'



const Sidebar = () => {
    const authUser = useSelector(state => state.auth.user);
    const routes = [
        {
            name: "Dashboard",
            path: "/home",
            condition: true
        },
        {
            name: "Login",
            path: "/login",
            condition: !authUser
        },
        {
            name: "Sign Up",
            path: "/signup",
            condition: !authUser
        },
        {
            path: "#",
            name: "Samayun Miah Chowdhury",
            // title: currentUser.name && currentUser.name,
            type: 'img',
            condition: !false
        },
        // {
        //     name: "Logout",
        //     path: "#",
        //     type: 'button',
        //     handler: handleLogout,
        //     icon: "fas fa-sign-out-alt",
        //     hasDivider: true,
        //     condition: true
        // }
    ];
    return (
        <div className='sidebar'>
            <ul className="sidebar-nav">
                {routes.map((route, i) => {
                    return route.condition && (
                        <li className="sidebar-item" key={i}>
                            <Link to={route.path}>
                                {route.name} </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default Sidebar;