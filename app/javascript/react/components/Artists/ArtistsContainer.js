import React, { useState, useEffect } from "react";
import moment from "moment";


const ArtistsContainer = (props) => {
  const [artists, setArtists] = useState([]);

  const getArtists = async () => {
    try {
      const response = await fetch("/api/v1/artists");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const artistData = await response.json();
      setArtists(artistData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists();
  }, [artists.length]);

  let artistList;
  artistList = artists.map((artist) => {
    return (
      <li key={artist.id}>
        {artist.name}
        <p>Bio: {artist.bio}</p>
        <p>Created on: {moment(artist.created_at).format("LL")}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>All The Artists</h1>
      {artistList}
    </div>
  );
};

export default ArtistsContainer;
