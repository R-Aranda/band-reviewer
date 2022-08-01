import React, { useState, useEffect } from "react";

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
      return <li key={artist.id}>{artist.name}</li>;
    });
    return artistList;
  }

  return (
    <div>
      <ul>{artistList}</ul>
    </div>
  );
};

export default ArtistsIndexContainer;
