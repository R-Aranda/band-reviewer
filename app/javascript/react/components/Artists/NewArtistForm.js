import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList";
import { Redirect } from "react-router-dom";

const NewArtistForm = () => {
  const [artistObject, setArtistObject] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [newArtist, setNewArtist] = useState({
    name: "",
    bio: "",
    photo: "",
    website: "",
    genre: "",
  });
  const clearForm = (event) => {
    event.preventDefault();
    setArtistObject({
      name: "",
      bio: "",
      photo: "",
      website: "",
      genre: "",
    });
    setErrors({});
  };

  const addArtist = async () => {
    try {
      const response = await fetch("/api/v1/artists", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(artistObject),
      });
      const artistData = await response.json();
      setArtistObject(artistData);
      setShouldRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to={`/artists/${artistObject.artist.id}`} />;
  }

  const handleInputChange = (event) => {
    setArtistObject({
      ...artistObject,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["name", "bio", "photo"];
    requiredFields.forEach((field) => {
      if (artistObject[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      addArtist();
    }
  };

  return (
    <div className="login_signup-div">
      <form className="new-review-form" onSubmit={onSubmitHandler}>
        <ErrorList errors={errors} />
        <label className="new-review-form-label">
          Name:
          <input
            className="new-review-form-text-box"
            type="text"
            id="name"
            onChange={handleInputChange}
            value={artistObject.name}
          />
        </label>

        <label className="new-review-form-label">
          Bio:
          <input
            className="new-review-form-text-box"
            type="text"
            id="bio"
            onChange={handleInputChange}
            value={artistObject.bio}
          />
        </label>

        <label className="new-review-form-label">
          Photo:
          <input
            className="new-review-form-text-box"
            type="text"
            id="photo"
            onChange={handleInputChange}
            value={artistObject.photo}
          />
        </label>

        <label className="new-review-form-label">
          Website:
          <input
            className="new-review-form-text-box"
            type="text"
            id="website"
            onChange={handleInputChange}
            value={artistObject.website}
          />
        </label>
        <label className="new-review-form-label">
          Genre:
          <input
            className="new-review-form-text-box"
            type="text"
            id="genre"
            onChange={handleInputChange}
            value={artistObject.genre}
          />
        </label>

        <div className="review-button-div">
          <button className="review-button" onClick={clearForm}>
            Clear
          </button>
          <input className="review-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default NewArtistForm;
