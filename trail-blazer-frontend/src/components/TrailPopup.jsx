import React, { Component } from 'react';

class TrailPopup extends Component {
  render() {
    return (
      
      <div className="map-bubble">
        <button onClick={this.props.closePopup}>close me</button>  
        <h3>Trail Name Here</h3>
        <ul className="trail-info">
          <li>Description length, difficulty, rating</li>
          <li>Description: <em>Trail description goes here.</em></li>
          <li>Length: <em>Trail length goes here.</em></li>
          <li>Difficulty: <em>Trail difficulty goes here.</em></li>
          <li>Rating: <em>Trail rating goes here.</em></li>
        </ul>
      </div>

    );
  }
}

export default TrailPopup;