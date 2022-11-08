import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const datas = useLoaderData();
    console.log(datas)
    return (
        <div className="row container ms-5 me-0">
            {
                datas.slice(0,3).map((data,index)=><ServiceDetails
                key={index}
                data={data}
                ></ServiceDetails>)
            }
            <Link to="/all">
            <Button className='mt-3' variant="success">See all</Button>{' '}
            </Link>
        </div>
    );
};

export default Services;