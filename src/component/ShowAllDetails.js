import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from './ShowDetails';
import { AuthContext } from './UserContext';

const ShowAllDetails = () => {
    const {datas} = useContext(AuthContext);
    return (
        <div className="container">
            <div className="row">
   {
    datas.map(data=><ShowDetails
    key={data._id}
    data={data}
    ></ShowDetails>)
   }
</div>
        </div>
    );
};

export default ShowAllDetails;