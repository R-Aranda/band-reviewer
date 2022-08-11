import React from 'react';

const ArtistTopSection = (props) => {
    return (  
        <div className="news-image-gallery-container">
            <div className="row">
                <div className="small-12 medium-12 large-4 row">
                    <div className='image-container'>
                        <img src={`${props.photo}`} />
                    </div>
                    <div className="rounded-social-buttons">
                     <a className="social-button facebook" href="#"><i className="fab fa-facebook"/></a>
                     <a className="social-button twitter" href="#"><i className="fab fa-twitter"/></a>
                     <a className="social-button spotify" href="#"><i className="fab fa-spotify"/></a>
                        <div className='top-section-text'>
                            <h4 className="news-image-gallery-title">{props.name}</h4>
                            <p>{props.bio}</p>
                            <p> <a href={`${props.website}`} className="read-more"> Read More on their website </a> </p>
                            <p>Genre: {props.genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ArtistTopSection;