import React from 'react';
import Review from './Review';

const ReviewSection = () => {
    const reviews = [
        {_id: 1, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 2, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 3, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 4, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 5, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
        {_id: 6, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?' ,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sNAcs6sJqZkqQ4X42oDMe_FBN5-gY0giS8Ov_8_un3cC_6obPLePKy_mGXL5nHN92Vw&usqp=CAU', rate: 5},
    ]
    return (
        <div className='my-20'>
            <h2 className='text-white text-center text-4xl mb-10'>reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mx-6 lg:mx-20'>
                {reviews.map(r=><Review key={r._id} review={r}/>)}
            </div>
        </div>
    );
};

export default ReviewSection;