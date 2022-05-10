import React from 'react';
import './About.css'

const About = () => {
    return (
        <>            
        <h1>SEE THE SHORT DISCRIPTION ABOUT ME</h1>
       
        <div className='about-container'>
            <div className='image'>
                <img src="../../images/formal-pic.jpg" alt="" />
            </div>
            <div className='about-me'>
                <h2>Hello, Myself Eliana!</h2>
                <p>I complete my gratulation recently from Daffodil International University department of CSE.<br/>
                 My dream is be a successful web developer .I'm exploring and acquiring necessary skills and knowledge I'll want to be a great web developer.
                 I am the master of HTML, CSS ,Javascript,Bootstrap and React. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS.
                  I even know the deployment, server and security. I will give you 100% web solution .</p>
            </div>
        </div>
        </>
    );
};

export default About;