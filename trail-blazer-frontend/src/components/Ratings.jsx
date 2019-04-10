import React, { Component } from 'react';
import axios from 'axios';
import SlideToggle from "react-slide-toggle";
import eases from 'eases';

const ToggleText = () => "+ Submit Trail Rating";
const defaultEase = eases["cubicInOut"];

class AddRating extends Component {

AddRating = (e) => {
    e.preventDefault();
    axios.post("/api/v1/ratings", {
        rating:  e.target.elements["AddRating"].value,
        trailId: this.props.trailId
        
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        throw error;
    })
    e.target.elements["AddRating"].value = ''
    window.location.reload()
}

render() {
  return (        
    <div>

      <SlideToggle
        duration={500}
        collapsed
        render={({
          onToggle,
          setCollapsibleElement,
          toggleState,
          isMoving,
          hasReversed,
          range,
          progress
        }) => (
          <div
            className={
              "slide-toggle slide-toggle--special " +
              (toggleState || "").toLowerCase()
            }
          >
            <div className="slide-toggle__header">
              <button className="slide-toggle__toggle" onClick={onToggle}>
                <ToggleText />
              </button>
            </div>
            <div className="slide-toggle__box" ref={setCollapsibleElement}>
              <div
                className="slide-toggle__box-inner"
                style={{ opacity: Math.max(0.5, range) }}
              >
              
                <form onSubmit={this.AddRating} >
                  <div className="form-group">
                    <label htmlFor="AddRating">Add Trail Rating:</label>
                    <input className="regular-form" id="AddRating" name="AddRating" type="integer" placeholder="Rate the trail between 1 and 5"></input>
                  </div>
                  <button className="btn btn-block" type="submit">Submit Rating</button>
                </form>
                
              </div>
            </div>

          </div>
        )}
      />

    </div>
    
    
    
    
  )}
}

export default AddRating; 