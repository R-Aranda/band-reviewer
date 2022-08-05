import React from "react";
import moment from "moment";

const ReviewTile = ({ reviews }) => {

  let reviewList
  if (reviews) {
    reviewList = reviews.map((review) => {
      return (
        <li key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.body}</p>
          <p>Posted at: {moment(review.created_at).format("LL")}</p>
        </li>
      );
    });
  }
  return (
    <ul>{reviewList}</ul>
  );
};

export default ReviewTile;
