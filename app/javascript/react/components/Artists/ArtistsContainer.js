import React, { useState, useEffect } from "react";
import ArtistTile from "./ArtistTile";

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
      setArtists(artistData.artists);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists();
  }, [artists.length]);

  const artistArray = artists.map((artist) => {
    return (
      <ArtistTile
        key={artist.id}
        name={artist.name}
        bio={artist.bio}
        id={artist.id}
      />
    );
  });

  return (
    <div className="artist-index-container">
      <div className="grid-x">{artistArray}</div>
    </div>
  );
};

export default ArtistsContainer;
