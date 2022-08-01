import React, { useState, useEffect } from "react";
import moment from "moment";

const ArtistsIndexContainer = (props) => {
  const [artists, setArtists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchArtists = async () => {
    try {
      const response = await fetch("/api/v1/artists");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const artistData = await response.json();
      setArtists(artistData);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  let artistList;
  if (isLoaded) {
    artistList = artists.map((artist) => {
      return (
        <li key={artist.id}>
          {artist.name}
          <p>Bio: {artist.bio}</p>
          <p>Created on: {moment(artist.created_at).format("LL")}</p>
        </li>
      );
    });
  }

  return (
    <div>
      <div>
        <h1>All The Artists</h1>
      </div>
      {artistList}
    </div>
  );
};

export default ArtistsIndexContainer;
