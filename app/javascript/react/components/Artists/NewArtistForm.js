import React, { useState, useEffect } from "react";
import ErrorList from "./ErrorList";
import { Redirect } from "react-router-dom";

const NewArtistForm = () => {
  const [artistObject, setArtistObject] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [newArtist, setNewArtist] = useState({
    name: "",
    bio: "",
    photo: ""
  });
  const clearForm = (event) => {
    event.preventDefault();
    setNewArtist({
      name: "",
      bio: "",
      photo: ""
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
          "Accept": "application/json",
        },
        body: JSON.stringify(newArtist),
      });
      const artistData = await response.json()
      setArtistObject(artistData);
      setShouldRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to={`/artists/${artistObject.id}`} />;
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

      <label>
        Photo:
        <input
          type="text"
          id="bio"
          onChange={handleInputChange}
          value={newArtist.photo}
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
