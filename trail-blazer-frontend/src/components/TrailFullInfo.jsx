import React, { Component } from 'react';
import axios from 'axios';

class TrailFullInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
        trails: []
    }
  }
  componentDidMount() {
    axios.get('api/v1/trails.json')
      .then(response => {
        this.setState({
          trails: response.data
    })
  })
    .catch(error => console.log(error))
}
  render() {
    return (
      <div className="lists-container trail__full-info">
      <i class="fa fa-info" aria-hidden="true"></i>
      <h2>Trail Information</h2>
        {this.state.trails.map( trail => {
          return (
            <div className="single-trail" key={trail.id}>
              <h3>Single Trail Information</h3>
              <p>{trail.id}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
export default TrailFullInfo;