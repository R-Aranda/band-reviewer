import React, { useState, useEffect } from "react";
import ArtistsContainer from "./ArtistsContainer";
import ErrorList from "./ErrorList";
import { Redirect } from "react-router-dom";

const NewArtistForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [newArtist, setNewArtist] = useState({
    name: "",
    bio: "",
  });
  const clearForm = (event) => {
    event.preventDefault();
    setNewArtist({
      name: "",
      bio: "",
    });
    setErrors({});
  };

  const addArtist = async () => {
    try {
      const response = await fetch("/api/v1/artists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArtist),
      });
      const artistObject = await response.json();
      setShouldRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/artists" />;
  }

  const handleInputChange = (event) => {
    setNewArtist({
      ...newArtist,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["name", "bio"];
    requiredFields.forEach((field) => {
      if (newArtist[field].trim() === "") {
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
    <form className="callout" onSubmit={onSubmitHandler}>
      <ErrorList errors={errors} />
      <label>
        Name:
        <input
          type="text"
          id="name"
          onChange={handleInputChange}
          value={newArtist.name}
        />
      </label>

      <label>
        Bio:
        <input
          type="text"
          id="bio"
          onChange={handleInputChange}
          value={newArtist.bio}
        />
      </label>

      <div className="button-group">
        <button className="button" onClick={clearForm}>
          Clear
        </button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default NewArtistForm;
