import React, {useState } from 'react';
import ErrorList from '../Artists/ErrorList';

const ReviewForm = ({ addReview }) => {
    const [errors, setErrors] = useState({});
    const [addNewReview, setAddNewReview] = useState({
        title: "",
        body: ""
    })

    const handleInputChange = (event) => {
        setAddNewReview({
          ...addNewReview,
          [event.currentTarget.id]: event.currentTarget.value,
        });
      };

    
    const validForSubmission = () => {
        let submitErrors = {};
        const requiredFields = ["title", "body"];
        requiredFields.forEach((field) => {
          if (addNewReview[field].trim() === "") {
            submitErrors = {
              ...submitErrors,
              [field]: "is blank",
            };
          }
        });
    
        setErrors(submitErrors);
        return _.isEmpty(submitErrors);
    };
      
      const clearForm = (e)=> {
          e.preventDefault();
          setAddNewReview({
              title: "",
              body: ""
            });
            setErrors({});
        }
        
        const onSubmitHandler = (e) => {
            e.preventDefault();
            if (validForSubmission()) {
                addReview(addNewReview);
                setAddNewReview({
                    title: "",
                    body: ""
                  });
              }
        };
    return ( 
        <div>
            <h2>Submit A Review:</h2>
            <ErrorList errors={errors} />
            <form className="callout" onSubmit={onSubmitHandler}>
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

     );
}
 
export default ReviewForm;