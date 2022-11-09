import React from 'react';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h1 className='mt-5 mb-5'>MY SERVICES</h1>
            <Services></Services>
        </div>
    );
};

export default Home;