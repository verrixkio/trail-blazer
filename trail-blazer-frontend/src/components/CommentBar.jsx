/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import SlideToggle from "react-slide-toggle";
import eases from 'eases';

const ToggleText = () => "+ Submit Trail Comment";
const defaultEase = eases["cubicInOut"];

// This component gets the message info from the user!
class CommentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeNameHandler = (event) => {
    this.setState({name: event.target.value})
  }
  messageHandler = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.post('/api/v1/comments', {
      data: this.state.message,
      trail_id: this.props.match.params.id, 
      name: this.state.name})

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.reload()
  }
    

  render() {
    return (
      <div>
      
        <SlideToggle
          duration={500}
          collapsed
          render={({
            onToggle,
            setCollapsibleElement,
            toggleState,
            isMoving,
            hasReversed,
            range,
            progress
          }) => (
            <div
              className={
                "slide-toggle slide-toggle--special " +
                (toggleState || "").toLowerCase()
              }
            >
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={onToggle}>
                  <ToggleText />
                </button>
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div
                  className="slide-toggle__box-inner"
                  style={{ opacity: Math.max(0.5, range) }}
                >
                
                  <form onSubmit ={this.handleSubmit}>
                    <div>
                      <label>Username:</label>
                      <input type='text' value={this.state.name} onChange={(this.changeNameHandler)}/>
                    </div>
                    <div>  
                      <label>Message:</label>
                      <textarea value={this.state.message} onChange={(this.messageHandler)}></textarea>
                    </div>
                    <button className="btn btn-block" type ='submit'>Submit Comment</button>
                  </form>
                  
                </div>
              </div>

            </div>
          )}
        />
              
      </div>

    );
  }
}

export default withRouter(CommentBar);
