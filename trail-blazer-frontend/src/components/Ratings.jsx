import React, { Component } from 'react';
import axios from 'axios';
import SlideToggle from "react-slide-toggle";
import eases from 'eases';
import StarRatings from 'react-star-ratings';
import Ratings from 'react-ratings-declarative';
const ToggleText = () => "+ Submit Trail Rating";
const defaultEase = eases["cubicInOut"];

class AddRating extends Component {
  constructor(props){
    super(props)
    this.state = {
        average: 0,
        
    }
}
componentDidMount() {

    axios.get('http://localhost:3000/trails/api/v1/ratings')
    .then(response => {


        const serverRate  = response.data
        let Ratings = [];

        
        let theProp = this.props.trailId

        serverRate.forEach(function(Rate) {
        if (Rate.trails_id == theProp) {
        Ratings.push(Rate.feedback)} 
        });

  
        let total = 0
        Ratings.forEach(function(Rate) {
            total += Rate
        })
    
        let average = (total / Ratings.length);
        let averageRnd = Math.round(average);
    
        
        this.setState({
            average: averageRnd 
        })
        console.log(response.data)
        
    })
    .catch(error => console.log(error))
}

  changeRating = (newRating) => {
    axios.post("/api/v1/ratings", {
        rating: newRating,
        trailId: this.props.trailId
        
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        throw error;
    })
   
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
              
                <form onSubmit={this.AddRating} >
                  <div className="form-group">
                    <label htmlFor="AddRating">Add Trail Rating:</label>

          <Ratings
            rating={this.state.average}
            widgetRatedColors="#F19C06"
            changeRating={this.changeRating}
          >
            <Ratings.Widget
               widgetHoverColor="#F19C06"
            
            />
            <Ratings.Widget 
              widgetHoverColor="#F19C06"/>
            <Ratings.Widget
              widgetHoverColor="#F19C06"
            />
            <Ratings.Widget 
              widgetHoverColor="#F19C06" />
            <Ratings.Widget 
            widgetHoverColor="#F19C06"/>
          </Ratings>
                  </div>
                  <button className="btn btn-block" type="submit">Submit Rating</button>
                </form>
                
              </div>
            </div>

          </div>
        )}
      />

    </div>
    
    
    
    
  )}
}

export default AddRating; 