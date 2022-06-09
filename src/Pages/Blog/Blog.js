import React from 'react';

const Blog = () => {
    return (
        <div style={{ color: "#006400" }} className='container  mt-5'>
            <h3 style={{ color: 'RGB(220,77,1)' }} className=' text-center'>Difference between  authorization and authentication</h3>
            <p>Authentication is the first step of security system to check a real user. Authorization is the process to give permission to user for accessing resources. Authorization always occures after Authentication. User can see Authentication even some portions can changed by users. User can't changed Authorization. As example register or login is part of Authentication and download photos, change profile picture, give like or dislike are example of Authorization </p>

            <h3 style={{ color: 'RGB(220,77,1)' }} className='text-center'>The reasons of using firebase and other options  to implement authentication</h3>
            <h5>There are plenty features of firebase, developer can use.Here are some  </h5>
            <li>To send notification , developer can use firebase cloud messeging.</li>
            <li>To store user data like users details,messeges, metadata developer can use firebase database.</li>
            <li>To store user-generated content as exmple profile picture, messeges etc developer can use firebase cloud storage</li>

            <h5 className='mt-3'>To implement authentication there are both free and paid options to use. </h5>
            <li>Parse, Supabase, Back4App, Kuzzle, Couchbase, AWS amplify are free and paid platforms of authentication </li>
            <li>Cookie-Based authentication, sign up with popup, Token-Based authentication, third party access(OAuth, API-token), OpenId these methods are also used for authentication  </li>


        </div>
    );
};

export default Blog;