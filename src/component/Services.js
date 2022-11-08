import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const datas = useLoaderData();
    console.log(datas)
    return (
        <div>
            <p>service</p>
            {
                datas.map((data,index)=><ServiceDetails
                key={index}
                data={data}
                ></ServiceDetails>)
            }
        </div>
    );
};

export default Services;