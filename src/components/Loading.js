import React from 'react';
import loading from '../assets/images/loading.gif'

const Loading = () => {
    return (
        <div className='w-full h-full flex items-center justify-center my-24'>
            <img className='w-48 lg:w-72' src={loading} alt="loading" />
        </div>
    );
};

export default Loading;