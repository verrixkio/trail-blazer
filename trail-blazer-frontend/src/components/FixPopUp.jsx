import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class FixPopUp extends Component {
  addDonation = (e) => {
    e.preventDefault();
    axios.post(" api/v1/donation#create", {
        amount: e.target.elements["amount"].value,
        name: e.target.elements["name"].value,
        solutionId: this.props.solution.id,
        trails_id: this.props.solution.trails_id
    })
    .then(function(response) {

        console.log(response);

    })
    .catch(function(error) {
        throw error;
    })
    console.log(e.target.elements["name"].value)
    console.log(e.target.elements["amount"].value)
    e.target.elements["name"].value = ''
    e.target.elements["amount"].value = ''

    window.location.reload()
}
  render() {
    return (
      
      <div className="map-bubble">
        <h3>Selected cause:</h3>  
        <p>{this.props.solution.description_to_fix}</p>
        <form onSubmit={this.addDonation}>
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="regular-form" id="name" name="name" type="text" placeholder="name"></input>
              <label htmlFor="amount">Amount:</label>
              <input className="regular-form" id="amount" name="amount" type="integer" placeholder="amount"></input>
              <label htmlFor="credit-card">Credit Card:</label>
              <input className="regular-form" id="credit-card" name="credit-card" type="integer" placeholder="credit-card"></input>
          </div>
          <button className="btn btn-block" type="submit">Submit Donation</button>
        </form>

      </div>

    );
  }
}

export default FixPopUp;

