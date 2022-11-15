import React from 'react';
import UseTitle from './Hook/UseTitle';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <h1 className='mt-5 mb-5'>MY SERVICES</h1>
            <Services></Services>
        </div>
    );
};

export default Home;