/** @format */

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "./Hook/UseTitle";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  UseTitle('MyRiview')
  const [data,setData] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:5000/comment',{
        headers:{
          authorizatio:`Bearer ${localStorage.getItem('secret-token')}`
        }
      })
      .then(res=>res.json())
      .then(da=>setData(da))
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
