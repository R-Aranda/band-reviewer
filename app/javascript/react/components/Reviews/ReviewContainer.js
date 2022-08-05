import React, {useState, useEffect} from "react";
import ReviewTile from "./ReviewTile";
import ReviewForm from "./ReviewForm";


const ReviewContainer = ({ reviews, addReview }) => {

  return (
    <div>
      <h2>Reviews:</h2>
      <ReviewTile 
        reviews={reviews}
      />
      <ReviewForm 
        addReview={addReview}
      />
    </div>
  );
};

export default ReviewContainer;
