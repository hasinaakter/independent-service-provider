import React from 'react';
import './Service.css'

const Service = (props) => {
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
        </div>
       </div>
    );
};

export default Service;