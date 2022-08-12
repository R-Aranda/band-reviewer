import React, { useState, useEffect } from "react";
import ReviewContainer from "../Reviews/ReviewContainer";
import ArtistTopSection from "./ArtistTopSection";

const ArtistShowPage = (props) => {
  const [artist, setArtist] = useState({});
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

  const addReview = async (formInput) => {
    try {
      const response = await fetch(`/api/v1/artists/${artistId}/reviews`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInput),
      });
      const reviewData = await response.json();
      {
        response.status === 401
          ? alert(reviewData.error)
          : setReviews(reviews.concat(reviewData.review));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ArtistTopSection
        key={artist.id}
        name={artist.name}
        bio={artist.bio}
        photo={artist.photo}
        genre={artist.genre}
        website={artist.website}
        data={artist.artist_data}
      />
      <ReviewContainer reviews={reviews} addReview={addReview} />
    </div>
  );
};

export default ArtistShowPage;
