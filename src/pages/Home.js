import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import BusinessSummary from '../components/Home/BusinessSummary';
import Parts from '../components/Home/Parts';
import ReviewSection from '../components/Home/ReviewSection';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-yellow-100 to-base-100'>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <ReviewSection/>
        </div>
    );
};

export default Home;