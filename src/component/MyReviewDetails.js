/** @format */

import React, { useState } from "react";

const MyReviewDetails = ({ cm }) => {
  console.log(cm);
  const { _id, cmt,name } = cm;
  const [newCmt,setNewCmt] = useState(cmt);

  const handleDelete = (id)=>{
    console.log(id)
    fetch(`http://localhost:5000/users/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    const remainingCmt = cmt.filter(u=>u._id!==id);
    setNewCmt(remainingCmt)
  }
  return (
    <div className="d-flex justify-content-between align items-center border mt-1 bg-light container">
      <p>{name}</p>
        <p className="text-dark">{newCmt}</p>
        <small className=""><button>Edit</button></small>
        <small className=""><button onClick={()=>handleDelete(_id)} >Delete</button></small>
    </div>
  );
};

export default MyReviewDetails;
