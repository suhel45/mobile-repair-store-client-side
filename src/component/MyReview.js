/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "./Hook/UseTitle";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  UseTitle('MyRiview')
  const [data,setData] = useState([]);

  useEffect(()=>{
      fetch('https://mobile-repair-server-side-suhel45.vercel.app/comment',{
        headers:{
          authorization:`Bearer ${localStorage.getItem('secret-token')}`
        }
      })
      .then(res=>res.json())
      .then(da=>{
        if(!da.message){setData(da)}
      })
      .catch(e=>console.log(e))
  },[])
  const len = data.length;
  console.log(data);
  return (
    <div>
      <div className="container mt-5">
        <h3>My Review</h3>
         {
          !len && 
          <p>No review were added</p>
         }
            {data.map((cm) => (
              <MyReviewDetails key={cm._id} cm={cm}></MyReviewDetails>
            ))}
      </div>
    </div>
  );
};

export default MyReview;
