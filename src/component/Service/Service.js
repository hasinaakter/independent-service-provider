import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Service = (props) => {
     const navigate = useNavigate();
     const [user] = useAuthState(auth);    

      
     const handlerButton = () =>{

          if(user){
               navigate('/checkout');
           }
          
     }
    console.log(props);
    const {name,image,price,description,rating} = props.service;

    return (
        <div className='service-container'>
        <div className='service'>
        <div>
             <img src={image} height='250' width='300' alt=" "/>
        </div>
        <div className='service-info'>
             <h3>Name: {name}</h3>
             <h4>Fee: {price}</h4>
             <p>Description: {description}</p>
             <h4>Rating: {rating} out of 5</h4>
             
        </div>
        <div>
        <button onClick={handlerButton } className='btn-cart'>
                <p className='btn-text'>Book Now</p></button>
        </div>
        </div>
       </div>
    );
};

export default Service;