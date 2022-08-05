import React from "react";
import ReviewTile from "./ReviewTile";

const ReviewContainer = ({ reviews }) => {
  const reviewList = reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        body={review.body}
        title={review.title}
        created_at={review.created_at}
      />
    );
  });

  return (
    <div>
      <h2>Reviews:</h2>
      <ul>{reviewList}</ul>
    </div>
  );
};

export default ReviewContainer;
