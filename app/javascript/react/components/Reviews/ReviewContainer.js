import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile"
import ReviewForm from "./ReviewForm"
import moment from "moment"

const ReviewContainer = ({ reviews, addReview }) => {
  const listOfReviews = reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        title={review.title}
        rating={review.rating}
        body={review.body}
        date={moment(review.created_at).format("LL")}
      />
    )
  })

  return (
    <div>
      <h2 className="review-header">Reviews</h2>
      <div className="review-text-div">{listOfReviews}</div>
      <ReviewForm addReview={addReview} />
    </div>
  )
}

export default ReviewContainer
