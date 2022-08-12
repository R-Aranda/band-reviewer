import React, { useState, useEffect } from "react";

const ReviewTile = ({ title, rating, body, date, reviewId, artistId }) => {
  const [upvote, setUpvote] = useState();
  const [downvote, setDownvote] = useState();
  const [count, setCount] = useState();
  const [upColor, setUpColor] = useState("upvote");
  const [downColor, setDownColor] = useState("downvote");
  const getVotes = async () => {
    try {
      const response = await fetch(
        `/api/v1/artists/${artistId}/reviews/${reviewId}/votes`
      );
      const voteData = await response.json();
      if (voteData.user_vote?.upvote > 0) {
        setUpColor("upvote-color");
      } else if (voteData.user_vote?.downvote > 0) {
        setDownColor("downvote-color");
      }
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
    setUpColor("upvote-color");
    setDownColor("downvote");
    updateVotes({
      review_id: reviewId,
      upvote: 1,
      downvote: 0,
    });
    setUpvote(upvote + 1);
  };

  const decrement = () => {
    setDownColor("downvote-color");
    setUpColor("upvote");
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
        <i onClick={increment} className={upColor}>
          ▲
        </i>
        <i onClick={decrement} className={downColor}>
          ▼
        </i>
        <p>{count}</p>
      </ul>
    </div>
  );
};

export default ReviewTile;
