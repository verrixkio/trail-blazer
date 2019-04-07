import React, { Component } from 'react';
import axios from 'axios';

class TrailFixRequestDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            trails: [],
        }
    }
    componentDidMount() {
        axios.get('api/v1/trail_solutions.json')
    .then(response => {
        this.setState({
            trails: response.data
        })
        
    })
    .catch(error => console.log(error))
}

render() {
    return (
      <div className="lists-container trail__display-fix-requests">
        <i class="fa fa-tags" aria-hidden="true"></i>
        <h2>Pending Requests to Fix Trail</h2>
        {this.state.trails.map( trail => { 
          return (
            <div className="single-solution" key={trail.id}>
              <p>{trail.description_to_fix}</p>
            </div>
          )
        }
      )}
    </div>
)}}

export default TrailFixRequestDisplay;