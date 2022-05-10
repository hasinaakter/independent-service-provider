import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='question-container'>
            <h1>Questions And Answers</h1>
            <div className='question'>
                <h3>1. Different Between Authentication and Authorization?</h3>
                <p>Answer:<br/> <br/>1. Authentication: Authentication confirms the identity of the user. Passwords, one-time pins, biometric information, and other information provided or entered by the user are used for authentication. The first step in a successful identity and access management strategy is authentication. The user can see and alter several aspects of authentication.
                    <br /> <br/> 2. Authorization: Authorization determines which resources a user is allowed to access.The organization implements and maintains the parameters that govern authorization.Authentication is always followed by authorization.The user has no visibility into or control over authorization.</p>

            </div>
            <div className='question'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Answer: Firebase Authentication makes it simple to get your users signed in without having to understand the complexities of designing your own authentication solution. Before we can use Firebase Storage, we should first authenticate a user with Firebase authentication. Default security rules require users to be authenticated. Firebase Storage is a powerful and simple object storage that allows you to store your files with ease.</p>
            </div>
            <div className='question'>
                <h3>3. What other services does firebase provide other than authentication</h3>
                <p>Answer: Firebase is a comprehensive solution that may help you build mobile or web applications more quickly and efficiently while using fewer resources. Let's look at how some of the services are used. Authentication, hosting, cloud storage, Google Analytics, predictions, cloud messaging, dynamic links, and remote configuration are all Cloud Firestore Cloud Functions.</p>
            </div>
        </div>
    );
};

export default Blogs;