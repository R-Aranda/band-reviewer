import React, { useState, useEffect } from "react"

const ArtistTopSection = ({ bio, website, genre, data }) => {
  return (
    <div className="news-image-gallery-container">
      <div className="row">
        <div className="small-12 medium-12 large-4 row">
          <div className="rounded-social-buttons">
            <div>
              <div className="image-container"></div>
              <a className="social-button facebook" href="#">
                <i className="fab fa-facebook" />
              </a>
              <a className="social-button twitter" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="social-button spotify" href="#">
                <i className="fab fa-spotify" />
              </a>
              <div className="clearfix"></div>
              <h4 className="news-image-gallery-title">{data?.name}</h4>
              <p>Biography: {bio}</p>
              <p>
                From: {data?.city}, {data?.country}
              </p>
              <p>First Active: {data?.["year-started"]}</p>
              <p>
                <a href={`${website}`} className="read-more">
                  Read More on their website
                </a>
              </p>
              <p>Genre: {genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistTopSection
