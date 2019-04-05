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
        <div>
        {this.state.trails.map( trail => {
            
            return (
                
                <div className="single-solution" key={trail.id}>
                    <h2>Trail Fix Requests</h2>
                    <h2>{trail.description_to_fix}</h2>
                </div>
      

            )
        }
    )}
    </div>
)}}

export default TrailFixRequestDisplay;