import React, { Component } from 'react';
import {withRouter} from 'react-router'
import RatingsDisplay from './RatingsDisplay'
import AddRating from './Ratings';
import TrailFixRequests from './TrailFixRequests';
import TrailFixRequestDisplay from './TrailFixRequestDisplay'

class IndividualTrailFull extends Component {

  render() {
    return (
      <div>
        <div>     
          <div><RatingsDisplay trailId={this.props.match.params.id}/></div>
        </div>

        <div>

          <TrailFixRequestDisplay trail_id={this.props.match.params.id}/>
          <TrailFixRequests trailId={this.props.match.params.id}/>
          <AddRating trailId={this.props.match.params.id}/>

        </div>
      </div>
    );
  }
}

export default withRouter(IndividualTrailFull);
