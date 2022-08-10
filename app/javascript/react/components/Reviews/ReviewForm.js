import React, { useState } from "react"
import ErrorList from "../Artists/ErrorList"

const ReviewForm = ({ addReview }) => {
  const [errors, setErrors] = useState({})
  const [addNewReview, setAddNewReview] = useState({
    rating: "",
    title: "",
    body: "",
  })

  const handleInputChange = (e) => {
    setAddNewReview({
      ...addNewReview,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["rating", "title", "body"]
    requiredFields.forEach((field) => {
      if (addNewReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const clearForm = (e) => {
    e.preventDefault()
    setAddNewReview({
      rating: "",
      title: "",
      body: "",
    })
    setErrors({})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (validForSubmission()) {
      addReview({ review: addNewReview })
      setAddNewReview({
        rating: "",
        title: "",
        body: "",
      })
    }
  }

  return (
    <div>
      <h2>Submit A Review:</h2>
      <ErrorList errors={errors} />
      <form className="callout" onSubmit={onSubmitHandler}>
        <label>
          Rating:
          <input
            type="text"
            id="rating"
            onChange={handleInputChange}
            value={addNewReview.rating}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            id="title"
            onChange={handleInputChange}
            value={addNewReview.title}
          />
        </label>

        <label>
          Body:
          <input
            type="text"
            id="body"
            onChange={handleInputChange}
            value={addNewReview.body}
          />
        </label>

        <div className="button-group">
          <button className="button" onClick={clearForm}>
            Clear
          </button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
