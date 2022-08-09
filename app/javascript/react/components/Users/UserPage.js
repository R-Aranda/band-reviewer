import React, { useState, useEffect } from "react";

const UserPage = (props) => {
  const [user, setUser] = useState([]);
  let userId = props.match.params.id;

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const userData = await response.json();
      setUser(userData.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <img src={user.photo_url} alt="User Photo" />
      <h1>{user.username}</h1>
      <div>{user.email}</div>
    </div>
  );
};

export default UserPage;
