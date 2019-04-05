import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class TrailPopup extends Component {
  render() {
    return (
      
      <div className="map-bubble">
        <button onClick={this.props.closePopup}>close me</button>  
        <h3>{this.props.trail.name}</h3>
        <ul className="trail-info">
         
          <li>Description: <em>{this.props.trail.description}</em></li>
          <li>Length: <em>{this.props.trail.length / 100} km</em></li>
          <li>Difficulty: <em>{this.props.trail.difficulty}</em></li>
         
        </ul>
      <Link to={`/trails/${this.props.trail.id}`}>
      <button type="button">
          See full trail information
      </button>
      </Link>
      </div>

    );
  }
}

export default TrailPopup;