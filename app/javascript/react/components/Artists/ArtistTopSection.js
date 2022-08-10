import React, { useState, useEffect } from "react"
import slugify from "react-slugify"

const ArtistTopSection = ({ name, bio, website, genre }) => {
  const [artistData, setArtistData] = useState({})
  const [loaded, setLoaded] = useState({})

  const artist = slugify(name)
  let url = `http://musicbrainz.org/ws/2/artist/?query=name:${artist}&fmt=json`

  const fetchArtistData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const artistResponse = await response.json()
      setLoaded(true)
      setArtistData(artistResponse.artists[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchArtistData()
  }, [])

  return (
    <div className="news-image-gallery-container">
      <div className="row">
        <div className="small-12 medium-12 large-4 row">
          <div className="rounded-social-buttons">
            {loaded && (
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
                <h4 className="news-image-gallery-title">{artistData.name}</h4>
                <p>{artistData.disambiguation}</p>
                <p>Biography: {bio}</p>
                {/* <p>From : {artistData["begin-area"]["name"]}</p> */}
                <p>
                  <a href={`${website}`} className="read-more">
                    Read More on their website{" "}
                  </a>
                </p>
                <p>Genre: {genre}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistTopSection
