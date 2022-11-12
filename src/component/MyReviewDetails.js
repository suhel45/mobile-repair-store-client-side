/** @format */

import React from "react";

const MyReviewDetails = ({ cm }) => {
  console.log(cm);
  const { _id, cmt } = cm;
  return (
    <div className="d-flex justify-content-center align items-center border mt-1 bg-light container">
        <p className="text-dark">{cmt}</p>
        <small className="ms-5"><button>Edit</button></small>
        <small className="ms-5"><button >Delete</button></small>
    </div>
  );
};

export default MyReviewDetails;
