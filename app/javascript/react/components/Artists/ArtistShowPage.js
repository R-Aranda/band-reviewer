import React, { useState, useEffect } from "react";
import ReviewContainer from "../Reviews/ReviewContainer";
import ArtistTopSection from "./ArtistTopSection";

const ArtistShowPage = (props) => {
  const [artist, setArtist] = useState([]);
  const [reviews, setReviews] = useState([]);

  let artistId = props.match.params.id;

  const fetchArtist = async () => {
    try {
      const response = await fetch(`/api/v1/artists/${artistId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const artistData = await response.json();
      setArtist(artistData.artist);
      setReviews(artistData.artist.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <div>
      <ArtistTopSection
        key={artist.id}
        name={artist.name}
        bio={artist.bio}
        genre={artist.genre}
        website={artist.website}
      />
      <ReviewContainer reviews={reviews} />
    </div>
  );
};

export default ArtistShowPage;
