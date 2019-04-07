import React, { Component } from 'react';
import {withRouter} from 'react-router'
import RatingsDisplay from './RatingsDisplay'
import AddRating from './Ratings';
class IndividualTrailFull extends Component {
render() {
//<h1>{this.props.match.params.id}</h1>
  return (


  <div className="lists-container trail__fix-request">
  
    <h1>{this.props.match.params.id}</h1>
    <AddRating trailId={this.props.match.params.id}/>
    <RatingsDisplay trailId={this.props.match.params.id}/>

  </div>
  );
}
}

export default withRouter(IndividualTrailFull);
