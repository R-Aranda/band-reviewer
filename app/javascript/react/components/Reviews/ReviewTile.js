import React from "react";
import moment from "moment";

const ReviewTile = ({ title, body, created_at }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Posted at: {moment(created_at).format("LL")}</p>
    </div>
  );
};

export default ReviewTile;
