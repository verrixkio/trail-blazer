import React, { Component } from 'react';
import axios from 'axios';
import SlideToggle from "react-slide-toggle";

const ToggleText = () => "Submit Request to Fix Trail";
// const defaultEase = eases["cubicInOut"];

class TrailFixRequests extends Component {

addFixRequest = (e) => {
    e.preventDefault();
    axios.post("/api/v1/trail_solutions#create", {
        description_to_fix:  e.target.elements["fix-request"].value,
        timeline_to_fix: e.target.elements["timeline"].value,
        cost: e.target.elements["cost"].value,
        collaboration: e.target.elements["collaboration"].value,
        trails_id: this.props.trailId
    })
    .then(function(response) {

        console.log(response);

    })
    .catch(function(error) {
        throw error;
    })
    e.target.elements["fix-request"].value = ''
    e.target.elements["timeline"].value = ''
    e.target.elements["cost"].value = ''
    e.target.elements["collaboration"].value = ''
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
              
                <i class="fa fa-tag" aria-hidden="true"></i>
                <h2>Submit Request to Fix Trail</h2>
                <form onSubmit={this.addFixRequest}>
                  <div className="form-group">
                    
                    <label htmlFor="fix-request">Trail items to fix:</label>
                    <input className="regular-form" id="fix-request" name="fix-request" type="text" placeholder="What would you like fixed?"></input>
                    
                    <label htmlFor="timeline">Days to fix:</label>
                    <input className="regular-form" id="timeline" name="timeline" type="integer" placeholder="How many days will this fix-request take?"></input>
                    
                    <label htmlFor="cost">Cost to fix:</label>
                    <input className="regular-form" id="cost" name="cost" type="integer" placeholder="How much will this cost?"></input>
                    
                    <label htmlFor="collaboration">Team Members:</label>
                    <input className="regular-form" id="collaboration" name="collaberation" type="text" placeholder="Collaborators?"></input>

                  </div>
                  <button className="btn btn-block" type="submit">Submit Request</button>
                </form>

                <button onClick={onToggle}>
                  <ToggleText />
                </button>
                
              </div>
            </div>

          </div>
        )}
      />
    
      
    </div>           
  )}
}

export default TrailFixRequests; 