import React from 'react';

const ArtistTopSection = (props) => {
    return (  
        <div className="news-image-gallery-container">
            <div className="row">
                <div className="small-12 medium-12 large-4 row">
                    <img className='image-container' src={`${props.photo}`} />
                        <div className='top-section-text'>
                        <h4 className="news-image-gallery-title">{props.name}</h4>
                        <p>{props.bio}</p>
                        {props.website && (
                            <p> <a href={`${props.website}`} className="read-more"> Read More on their website </a> </p>
                        )}
                        {props.genre && (
                            <p>Genre: {props.genre}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArtistTopSection;