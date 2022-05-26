import React from 'react';
import notFound from '../assets/images/notFound.gif'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} className="w-48 mx-auto my-24" alt="not found" />
        </div>
    );
};

export default NotFound;