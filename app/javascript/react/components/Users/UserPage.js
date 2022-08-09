import React, { useState, useEffect } from "react"

const UserPage = (props) => {
  const [user, setUser] = useState([])
  const [profilePhoto, setProfilePhoto] = useState([])

  let userId = props.match.params.id

  const getUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const userData = await response.json()
      setUser(userData.user)
      setProfilePhoto(userData.user.profile_photo.url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <img src={profilePhoto} alt="Profile Photo" />
      <h1>{user.username}</h1>
      <div>{user.email}</div>
    </div>
  )
}

export default UserPage
