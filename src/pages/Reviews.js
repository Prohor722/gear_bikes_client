import React, { useState } from 'react';
import Review from '../components/Home/Review';

const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    // const { data:reviews} = useQuery('reviews', ()=>fetch('reviews.json').then(res=>res.json()));
    fetch('reviews.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
    return (
        <div className='my-20'>
            <h2 className='text-4xl mb-10 font-semibold text-secondary text-center'>All Customer Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-20'>
                {
                    reviews.map(r=><Review key={r._id} review={r} />)
                }
            </div>
        </div>
    );
};

export default Reviews;