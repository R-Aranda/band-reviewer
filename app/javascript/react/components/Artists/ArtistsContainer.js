import React, { useState, useEffect } from "react";
import moment from "moment";
import ArtistTile from "./ArtistTile";
import NewArtistForm from "./NewArtistForm";
const ArtistsContainer = (props) => {
  const [artists, setArtists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const artistSubmitHandler = (artist) => {
    setArtists([...artists, artist]);
  };

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
