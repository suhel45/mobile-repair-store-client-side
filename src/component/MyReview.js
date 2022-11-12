/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import MyReviewDetails from "./MyReviewDetails";

const MyReview = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="container mt-5">
        <h3>My Review</h3>
            {data.map((cm) => (
              <MyReviewDetails key={cm._id} cm={cm}></MyReviewDetails>
            ))}
      </div>
    </div>
  );
};

export default MyReview;
