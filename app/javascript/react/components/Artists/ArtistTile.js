import React, { useState } from "react"
import { Link } from "react-router-dom"

const ArtistTile = (props) => {
  const handleClick = (event) => {
    event.preventDefault()
    props.deleteArtist(props.id)
  }

  return (
    <div className="artist-tiles">
      <div className="small-3">
        <div className="card">
          <div className="card-divider">
            <div className="artist-tile-text">
              <Link to={`/artists/${props.id}`}>{props.name}</Link>
              {props.adminRole && (
                <div className="button" onClick={handleClick}>
                  delete button
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistTile
