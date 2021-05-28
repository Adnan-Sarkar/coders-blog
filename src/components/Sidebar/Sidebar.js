import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className="sidebar-nav">
                <li className="sidebar-item">Dashboard</li>
                <li className="sidebar-item">Top Ratings</li>
                <li className="sidebar-item">Blog</li>
            </ul>
        </div>
    );
};

export default Sidebar;