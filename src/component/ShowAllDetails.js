import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from './ShowDetails';
import { AuthContext } from './UserContext';

const ShowAllDetails = () => {
    const {datas} = useContext(AuthContext);
    return (
        <div className="row container ms-5 me-0">
           {
            datas.map(data=><ShowDetails
            key={data._id}
            data={data}
            ></ShowDetails>)
           }
        </div>
    );
};

export default ShowAllDetails;