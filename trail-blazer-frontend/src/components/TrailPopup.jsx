import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TrailPopup extends Component {
  render() {
    return (
      
      <div className="trail-popup">
        <button className="trail-popup__close" onClick={this.props.closePopup}></button>  
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <h2>{this.props.trail.name}</h2>
        <p><strong>Description: </strong>{this.props.trail.description}</p>
        <p><strong>Length: </strong><strong className="green">{this.props.trail.length / 100} km</strong></p>
        <p><strong>Difficulty: </strong><strong className="green">{this.props.trail.difficulty}</strong></p>

        <Link to={`/${this.props.trail.id}`}>
          <button type="button" className="btn">
              See Full Trail Information
          </button>
        </Link>

      </div>

    );
  }
}

export default TrailPopup;