import React, { Component } from 'react';
import axios from 'axios';

class RatingsDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            Ratings: [],
            average: 0,
            SpecificRatings: []
        }
    }
    componentDidMount() {
        axios.get('/api/v1/ratings')
    .then(response => {
        // this.setState({
        //     Ratings: response.data
        // })
        const serverRat  = response.data
        let Ratings = [];
        console.log('Ratings', Ratings)
        console.log("!!!!!!!!!  state ratings 1   ", serverRat)
        console.log('the props from component did mount',this.props.trailId)
        let theProp = this.props.trailId


        serverRat.forEach(function(Rate) {
           if (Rate.trails_id == theProp) {
           Ratings.push(Rate.feedback)} 
        });


        console.log('!!!!!!!!   not ratings ', Ratings)
        let total = 0
        Ratings.forEach(function(Rate) {
            total += Rate
        })
      
        let average = (total / Ratings.length);
       
        console.log('tthe props ',this.props.trailId)
        console.log('total' + total)
        console.log('numb'  + Ratings.length)
        
        this.setState({
            Ratings: serverRat,
            SpecificRatings: Ratings,
            average: average 
        })
        console.log(response.data)
        
    })
    .catch(error => console.log(error))
    
   
       
    
}


render() {
    console.log('!!!!!! specific rating', this.state.SpecificRatings)
    return (
        <div>
            <h1>{this.state.average} !!!</h1>
        {this.state.SpecificRatings.map((Rating, i) => {
            
            return (
                
                <div className="single-solution" key={i} >
                   
                    <h3>{Rating}</h3>
                </div>
      

            )
        }
    )}
    </div>
)}}

export default RatingsDisplay; 