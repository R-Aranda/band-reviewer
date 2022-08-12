import React, { useState, useEffect } from "react"
import ArtistTile from "./ArtistTile"

const ArtistsContainer = (props) => {
  const [artists, setArtists] = useState([])
  const [adminRole, setAdminRole] = useState(false)

  const getArtists = async () => {
    try {
      const response = await fetch("/api/v1/artists")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const artistData = await response.json()
      setArtists(artistData.artists)
      if (artistData.user) {
        if (artistData.user.role === "admin") {
          setAdminRole(true)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getArtists()
  }, [])

  const deleteArtist = async (id) => {
    try {
      const response = await fetch(`api/v1/artists/${id}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(),
      })
      setArtists(artists.filter((artist) => artist.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const artistArray = artists.map((artist) => {
    return (
      <ArtistTile
        key={artist.id}
        name={artist.name}
        bio={artist.bio}
        photo={artist.photo}
        id={artist.id}
        adminRole={adminRole}
        deleteArtist={deleteArtist}
      />
    )
  })

  return (
    <div className="artist-index-container">
      <div className="grid-x">{artistArray}</div>
    </div>
  )
}

export default ArtistsContainer
