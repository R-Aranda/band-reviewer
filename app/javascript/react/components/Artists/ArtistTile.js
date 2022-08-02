import React from "react";
import {Link} from "react-router-dom";

const ArtistTile = (props) => {
    
    return (
    <div className="artist-tiles">
        <div className="small-3">
            <div className="card" style={{width: 300}}> 
                <img src="http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg"/>
                <div className="card-divider">
                    <div className="artist-tile-text">
                        <Link to={`/artists/${props.id}`}>{props.name}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default ArtistTile;