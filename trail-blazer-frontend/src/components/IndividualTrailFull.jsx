import React, { Component } from 'react';
import {withRouter} from 'react-router'
class IndividualTrailFull extends Component {
render() {

  return (
<h1>{this.props.match.params.id}</h1>
  );
}
}

export default withRouter(IndividualTrailFull);
