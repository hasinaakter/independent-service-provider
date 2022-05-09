import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur =event =>{
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/shop');
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn }>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                 
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />

                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='other-option'>
                  <div>------------------------------</div>
                  <h4>Or</h4>
                  <div>------------------------------</div>
                </div>
                <button >Continue With Google</button>
            </div>
          

        </div>
    );
};

export default Login;