import React, { Component } from 'react';
import {withRouter} from 'react-router'
import axios from 'axios';
class IndividualTrailFull extends Component {

componentDidMount() {
  axios.get('https://www.trailforks.com/api/1/trail?id=88331&api_key=docs')
  .then(response => {
      this.setState([{
          lists: response.data
      }])
  })
  .catch(error => console.log(error))
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
