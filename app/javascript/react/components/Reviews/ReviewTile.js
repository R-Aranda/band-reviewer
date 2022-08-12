import React, { useState, useEffect } from "react";

const ReviewTile = ({ title, rating, body, date, reviewId, artistId }) => {
  const [upvote, setUpvote] = useState();
  const [downvote, setDownvote] = useState();
  const [count, setCount] = useState();

  const getVotes = async () => {
    try {
      const response = await fetch(
        `/api/v1/artists/${artistId}/reviews/${reviewId}/votes`
      );
      const voteData = await response.json();
      setUpvote(voteData.upvotes);
      setDownvote(voteData.downvotes);
      setCount(voteData.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVotes();
  }, []);

  const increment = (event) => {
    updateVotes({
      review_id: reviewId,
      upvote: 1,
      downvote: 0,
    });
    setUpvote(upvote + 1);
  };

  const decrement = () => {
    updateVotes({
      review_id: reviewId,
      downvote: 1,
      upvote: 0,
    });
    setDownvote(downvote + 1);
  };
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
      const newVoteData = await response.json();
      setCount(newVoteData.total_votes.total);
    } catch (error) {
      alert("You must be signed in to vote!");
    }
  };

  return (
    <div className="review-text">
      <ul>
        <h3>{title}</h3>
        <h5>Rating: {rating} </h5>
        <p>{body}</p>
        <p>Posted at: {date}</p>
        <i onClick={increment} className="upvote">
          ▲
        </i>
        <i onClick={decrement} className="downvote">
          ▼
        </i>
        <p>{count}</p>
      </ul>
    </div>
  );
};

export default ReviewTile;
