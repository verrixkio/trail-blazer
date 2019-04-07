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
    <div className="lists-container trail__display-fix-requests">
        <i class="fa fa-tags" aria-hidden="true"></i>
        <h2>Pending Requests to Fix Trail</h2>
        {this.state.solutons.map( soluton => {
            if (soluton.trails_id == this.props.trail_id ) {
                return (
                    <div className="single-solution" key={soluton.id}>
                        <p>{soluton.description_to_fix}</p>
                    </div>
                ) } 
            }
        )}
    </div>
)}}

export default TrailFixRequestDisplay;