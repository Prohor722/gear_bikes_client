import React from 'react';
import { useQuery } from 'react-query';
import Review from '../components/Home/Review';
import Loading from '../components/Loading';

const Reviews = () => {
    const { data:reviews, isLoading} = useQuery('reviews', ()=>fetch('http://localhost:5000/reviews').then(res=>res.json()));
    
    if(isLoading){
        return <Loading/>
    }
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