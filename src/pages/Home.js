import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import BusinessSummary from '../components/Home/BusinessSummary';
import Parts from '../components/Home/Parts';
import ReviewSection from '../components/Home/ReviewSection';
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className=''>
            <Navbar/>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <ReviewSection/>
            <AboutUs />
            <Services/>
        </div>
    );
};

export default Home;