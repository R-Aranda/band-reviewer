import React from "react";
import { Link } from "react-router-dom";

const ArtistTile = (props) => {
  return (
    <div className="artist-tiles">
      <div className="small-3">
        <div className="card">
          <div className="card-divider">
            <div className="artist-tile-text">
              <Link to={`/artists/${props.id}`}>{props.name}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistTile;
