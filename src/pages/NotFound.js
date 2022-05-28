import React from 'react';
import notFound from '../assets/images/notFound.gif'
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <img src={notFound} className="w-48 mx-auto my-28" alt="not found" />
        </div>
    );
};

export default NotFound;