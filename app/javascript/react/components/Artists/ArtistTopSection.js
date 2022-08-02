import React from 'react';

const ArtistTopSection = ({ name, bio, website, genre}) => {
    return (  
        <div className="news-image-gallery-container">

            <div className="row">
                <div className="small-12 medium-12 large-4 row">
                    <div className="rounded-social-buttons">
                        <div className='container'>
                            <img className="img"src='https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
                        </div>
                     <a className="social-button facebook" href="#"><i className="fab fa-facebook"/></a>
                     <a className="social-button twitter" href="#"><i className="fab fa-twitter"/></a>
                     <a className="social-button spotify" href="#"><i className="fab fa-spotify"/></a>
                     <div className="clearfix"></div>
                            <h4 className="news-image-gallery-title">{name}</h4>
                            <p>{bio}</p>
                            <p> <a href="#" className="read-more"> Read More on their website </a> </p>
                            <p>Genre: {genre}</p>
                            <div>
                                <p> Average Rating: /5 </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ArtistTopSection;