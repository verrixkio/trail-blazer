import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

class TrailComments extends Component {
  constructor(props){
    super(props)
    this.state = {
        comments: []
    }
  }
  componentDidMount() {
    axios.get(`api/v1/comments/${this.props.match.params.id}.json`)
      .then(response => {
          this.setState({
            comments: response.data.reverse()
    })
  })
    .catch(error => console.log(error))
}
render() {
  return (
    <div className="lists-container">
    {this.state.comments.map( comment => {
        return (
            <div className="single-trail" key={comment.id}>
              <h2>{comment.name}</h2>
              <h4>{comment.data}</h4>
            </div>
        )
    })}
</div>
  );
}
}
export default withRouter(TrailComments);