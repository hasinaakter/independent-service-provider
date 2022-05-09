import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>

            <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;