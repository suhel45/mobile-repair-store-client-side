import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from './Hook/UseTitle';
import ServiceDetails from './ServiceDetails';
import { AuthContext } from './UserContext';

const Services = () => {
    const{ datas} = useContext(AuthContext);
    console.log(datas)
    return (
        <div className="container">
             <div className="row ">
     {
         datas.slice(0,3).map((data,index)=><ServiceDetails
         key={index}
         data={data}
         ></ServiceDetails>)
     }
     <Link to="/service">
     <Button className='mt-3' variant="success">See all</Button>{' '}
     </Link>
 </div>
        </div>
    );
};

export default Services;