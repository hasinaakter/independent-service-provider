import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] =useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>

            <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/checkout">Check Out</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
               {
                   user?
                   <button onClick={handleSignOut}>Sign Out</button>
                   :
                   <Link to="/login">Log In</Link>
               }
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;