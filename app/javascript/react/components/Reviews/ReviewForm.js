import React, {useState } from 'react'
import ErrorList from '../Artists/ErrorList'
let stars = stars = ["","⭐️","⭐️⭐️","⭐️⭐️⭐️","⭐️⭐️⭐️⭐️","⭐️⭐️⭐️⭐️⭐️"]
const ReviewForm = ({ addReview }) => {
    const [errors, setErrors] = useState({})
    const [addNewReview, setAddNewReview] = useState({
        rating:"",
        title: "",
        body: ""
    })

    const handleInputChange = (e) => {
        setAddNewReview({
          ...addNewReview,
          [e.currentTarget.id]: e.currentTarget.value,
        })
      };

    const validForSubmission = () => {
        let submitErrors = {}
        const requiredFields = ["rating","title", "body"];
        requiredFields.forEach((field) => {
          if (addNewReview[field].trim() === "") {
            submitErrors = {
              ...submitErrors,
              [field]: "is blank",
            };
          }
        });
    
        setErrors(submitErrors)
        return _.isEmpty(submitErrors)
    };
      
    const clearForm = (e)=> {
        e.preventDefault()
        setAddNewReview({
            rating: "",
            title: "",
            body: ""
          })
       setErrors({})
      }
        
      const onSubmitHandler = (e) => {
          e.preventDefault()
          if (validForSubmission()) {
              addReview({review: addNewReview})
              setAddNewReview({
                  rating: "",
                  title: "",
                  body: ""
                })
            }
      }

      const starSelector = stars.map(star =>{
        return(
          <option key={star} value={star}>{star}</option>
        )
      })

  return ( 
        <div>
          <form className="new-review-form" onSubmit={onSubmitHandler}>
            <h2 className="submit-review-header">Submit A Review</h2>
            <ErrorList errors={errors} />
            <label className="new-review-form-label">
              Rating
              <select className="new-review-form-text-box"
                id="rating"
                onChange={handleInputChange}
                value={addNewReview.rating}
              >{starSelector}</select>
            </label>

            <label className="new-review-form-label">
              Title
              <input className="new-review-form-text-box"
                type="text"
                id="title"
                onChange={handleInputChange}
                value={addNewReview.title}
              />
            </label>
      
            <label className="new-review-form-label">
              Body
              <input className="new-review-form-text-box"
                type="text"
                id="body"
                onChange={handleInputChange}
                value={addNewReview.body}
              />
            </label>
      
            <div className="review-button-div">
              <button className="review-button" onClick={clearForm}>
                Clear
              </button>
              <input className="review-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
  );
}
 
export default ReviewForm;