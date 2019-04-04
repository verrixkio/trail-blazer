import React, { Component } from 'react';
import axios from 'axios';

class TrailFixRequests extends Component {
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
        <div className="lists-container">
            {this.state.trails.map( trail => {
                return (
                    <div className="single-list" key={trail.id}>
                        <h2>Trail Fix Requests</h2>
                        <h2>{trail.id}</h2>
                    </div>
                )
            })}
        </div>
        )}
      }


export default TrailFixRequests; 