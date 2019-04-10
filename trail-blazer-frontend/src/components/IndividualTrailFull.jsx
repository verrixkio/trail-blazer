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
          <hr className="seperator" />
        </div>

        <div>

          <TrailFixRequestDisplay trail_id={this.props.match.params.id}/>
          <TrailFixRequests trailId={this.props.match.params.id}/>
          
          <i class="fa fa-star-half-empty" aria-hidden="true"></i>
          <h2>Add Trail Rating</h2>
          <div><AddRating trailId={this.props.match.params.id}/></div>

        </div>
      </div>
    );
  }
}

export default withRouter(IndividualTrailFull);
