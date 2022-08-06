import React, { useState } from "react";
import { Link } from "react-router-dom";

const ArtistTile = (props) => {

  if (props.adminRole) {

  }

  const handleClick = (event) => {
    event.preventDefault()
    props.deleteArtist(props.id)
  }

  // const deleteArtist = async () => {
  //   try {
  //   const response = await fetch(`api/v1/artists/${props.id}`, {
  //     method: "DELETE",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //     body: JSON.stringify(),
  //     })
  //     debugger
  //     const deleteData = await response.json()
  //     // debugger
  //     console.log(deleteData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  return (
    <div className="artist-tiles">
      <div className="small-3">
        <div className="card">
          <div className="card-divider">
            <div className="artist-tile-text">
              <Link to={`/artists/${props.id}`}>{props.name}</Link>
              <div className="button" onClick={handleClick}>
                delete button
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistTile;
