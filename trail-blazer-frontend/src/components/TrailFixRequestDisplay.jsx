import React, { Component } from 'react';
import axios from 'axios';

class TrailFixRequestDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            solutons: [],
        }
    }
    componentDidMount() {
        axios.get('api/v1/trail_solutions.json')
    .then(response => {
        this.setState({
            solutons: response.data
        })
       console.log('whats goooodddd', this.props.trailId) 
    })
    .catch(error => console.log(error))
}

render() {
    return (
        <div>
        {this.state.solutons.map( soluton => {
            if (soluton.trails_id == this.props.trail_id ) {
            return (
                
                <div className="single-solution" key={soluton.id}>
                    <h2>Trail Fix Request:</h2>
                    <h2>{soluton.description_to_fix}</h2>
                </div>
      

            ) } 
        }
    )}
    </div>
)}}

export default TrailFixRequestDisplay;