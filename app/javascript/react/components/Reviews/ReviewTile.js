import React from "react"

const ReviewTile = ({ title, rating, body, date, user_id }) => {
  return (
    <ul>
      <h3>{title}</h3>
      <h5>Rating: {rating}</h5>
      <p>{body}</p>
      <p>Posted at: {date}</p>
      <p>User Id: {user_id}</p>
    </ul>
  )
}

export default ReviewTile
