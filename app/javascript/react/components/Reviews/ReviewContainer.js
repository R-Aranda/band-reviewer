import React, { useState, useEffect } from "react";
import ReviewTile from "./ReviewTile";
import ReviewForm from "./ReviewForm";
import moment from "moment";

const ReviewContainer = ({ reviews, addReview }) => {
  const listOfReviews = reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        rating={review.rating}
        body={review.body}
        date={moment(review.created_at).format("LL")}
        artistId={review.artist_id}
        reviewId={review.id}
        userId={review.user_id}
        allVotes={review.votes}

      />
    );
  });

  return (
    <div>
      <h2>Reviews:</h2>
      {listOfReviews}
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default ReviewContainer;
