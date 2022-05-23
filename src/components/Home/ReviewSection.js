import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const ReviewSection = () => {
    const reviews = [
        {_id: 1, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 2, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 3, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 4, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 5, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 6, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki sg hghchgh hgcghchg gjvgcgj jhvjvj jgvjgcj jhvjvgjvjhv jhvjhvjhvj jhbjhvj jhvjvj?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
    ]
    return (
        <div className='py-20 bg-base-100'>
            <h2 className='text-center text-4xl mb-10 font-semibold'>Customer Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mx-6 lg:mx-20'>
                {reviews.map(r=><Review key={r._id} review={r}/>)}
            </div>
            <Link to='/reviews' className='block w-20 ml-auto pb-10 lg:pb-0 lg:mr-20 mt-10 text-lg font-bold text-secondary'>See All</Link>
        </div>
    );
};

export default ReviewSection;