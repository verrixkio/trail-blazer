import React, { Component } from 'react';
import axios from 'axios';

class TrailFixRequests extends Component {

addFixRequest = (e) => {
    e.preventDefault();
    axios.post("/api/v1/trail_solutions#create", {
        description_to_fix:  e.target.elements["fix-request"].value,
        timeline_to_fix: e.target.elements["timeline"].value,
        cost: e.target.elements["cost"].value,
        collaboration: e.target.elements["collaboration"].value,
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        throw error;
    })
}

render() {
    return (
           
            <form onSubmit={this.addFixRequest}>
                <div className="form-group">
                    <label htmlFor="fix-request">Fix-Request</label>
                    <input className="regular-form" id="fix-request" name="fix-request" type="text" placeholder="What would you like fixed?"></input>
                    <input className="regular-form" id="timeline" name="timeline" type="integer" placeholder="How many days will this fix-request take?"></input>
                    <input className="regular-form" id="cost" name="cost" type="integer" placeholder="How much will this cost?"></input>
                    <input className="regular-form" id="collaboration" name="collaberation" type="text" placeholder="Who helped you?"></input>
                </div>
                    <button className="btn btn-block" type="submit">Submit</button>
            </form>
                    
    )}
}
      


export default TrailFixRequests; 