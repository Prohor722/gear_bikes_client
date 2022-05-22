import React from 'react';
import Review from './Review';

const ReviewSection = () => {
    const reviews = [
        {_id: 1, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
        {_id: 2, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
        {_id: 3, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
        {_id: 4, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
        {_id: 5, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
        {_id: 6, name:'john abrahim', review: 'amar ja mon a hoy hoy tate tor ki?', rate: 5},
    ]
    return (
        <div>
            <h2>reviews</h2>
            <div>
                {reviews.map(r=><Review key={r._id} review={r}/>)}
            </div>
        </div>
    );
};

export default ReviewSection;