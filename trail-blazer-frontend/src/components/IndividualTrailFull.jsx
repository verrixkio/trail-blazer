import React, { Component } from 'react';
import {withRouter} from 'react-router'
import axios from 'axios';
class IndividualTrailFull extends Component {
  constructor(props){
    super(props)
    this.state = {
        trails: [],
        
      // pop up set to state in App.js
    }
  }
  
 
render() {

  return (
    <div>
<h1>{this.props.match.params.id} </h1>


</div>
 
  );
}
}

export default withRouter(IndividualTrailFull);
