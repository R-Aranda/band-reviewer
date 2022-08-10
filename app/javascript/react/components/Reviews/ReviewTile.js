import React, { useState } from "react";

const ReviewTile = ({
  title,
  rating,
  body,
  date,
  reviewId,
  artistId,
  userId
}) => {
  const [votes, setVotes] = useState({
    upvotes: 0,
    downvotes: 0,
  });
  const [oldVote, setOldVote] = useState({
    upvoted: false,
    downvoted: false,
  });
  const submitHandler = async (event) => {
    const currentVote = event.currentTarget.innerText

    // votes state should only be updated after the fetch 
    let payload = {
      upvotes: 0,
      downvotes: 0,
      review_id: reviewId,
      user_id: userId,
    }
    let allUpvotes
    let allDownvotes

    if (currentVote === "Agree") {
      allUpvotes = votes.upvotes + 1
      setOldVote({ upvoted: true, downvoted: false })
      payload.upvotes = 1;
    } else if (currentVote === "Disagree") {
      allDownvotes = votes.downvotes + 1
      setOldVote({ upvoted: false, downvoted: true })
      payload.downvotes = 1
    }
    setVotes({ upvotes: allUpvotes, downvotes: allDownvotes })
    await updateVotes(payload)
  }
  const updateVotes = async (payload) => {
    try {
      const response = await fetch(
        `/api/v1/artists/${artistId}/reviews/${reviewId}/votes`,
        {
          credentials: "same-origin",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      setVotes(payload);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  }

  return (
    <ul>
      <h3>{title}</h3>
      <h5>Rating: {rating}</h5>
      <p>{body}</p>
      <p>Posted at: {date}</p>
      <button className="button" onClick={submitHandler}>
        Agree
      </button>
      <button className="button" onClick={submitHandler}>
        Disagree
      </button>
      <p>
        {votes.upvotes} users agree and {votes.downvotes} users disagree
      </p>
    </ul>
  )
}

export default ReviewTile;
