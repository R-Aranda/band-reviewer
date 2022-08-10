import React from "react"

const ReviewTile = ({ title, rating, body, date }) => {
  
  return (
    <div className="review-text">
      <ul>
        <h3>{title}</h3>
        <h5>Rating: {rating} </h5>
        <p>{body}</p>
        <p>Posted at: {date}</p>
      </ul>
    </div>
  )
}

export default ReviewTile;
