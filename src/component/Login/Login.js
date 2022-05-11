import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth,{sendEmailVerification:true});

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const from = location?.state?.from?.pathname || '/';

    if(user){
        navigate(from,{replace:true})
    } 


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
            navigate(from,{replace:true})

            })
    }

    const notify = () => toast("Send a massage!");
   
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
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
                    <h4>Or</h4>
                 </div>
            
                <div >                 
                     <button onClick={handleGoogleSignIn} className='google-signin'>Continue With Google</button>
                </div>
                <div>
                    <p>Forgot Password? <button onClick={notify} className='reset-btn'> reset password</button></p>
                    <ToastContainer />
                </div>
            </div>


        </div>
    );
};

export default Login;