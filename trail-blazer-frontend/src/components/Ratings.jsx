import React, { Component } from 'react';
import axios from 'axios';
import RatingsDisplay from './RatingsDisplay'
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
    console.log(this.props.trailId + '!!!!!!!!!!!!!!!!!!!!!!')
}

render() {
    return (
           
            <form onSubmit={this.AddRating} >
                <div className="form-group">
                    <label htmlFor="AddRating">AddRating</label>
                    <input className="regular-form" id="AddRating" name="AddRating" type="integer" ></input>
                
                </div>
                    <button className="btn btn-block" type="submit">Submit</button>
            </form>
                    
    )}
}
      


export default AddRating; 