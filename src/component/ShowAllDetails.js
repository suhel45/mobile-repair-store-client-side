import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from './ShowDetails';

const ShowAllDetails = () => {
    const allData = useLoaderData();
    return (
        <div className="row container ms-5 me-0">
           {
            allData.map(data=><ShowDetails
            key={data._id}
            data={data}
            ></ShowDetails>)
           }
        </div>
    );
};

export default ShowAllDetails;