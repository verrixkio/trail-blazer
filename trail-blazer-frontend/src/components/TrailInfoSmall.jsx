import React, { Component } from 'react';
import axios from 'axios';

class TrailInfoSmall extends Component {
  constructor(props){
    super(props)
    this.state = {
        trails: []
    
    }
  }
  componentDidMount() {
    axios.get('api/v1/trails.json')
    .then(response => {
        this.setState([{
            lists: response.data
        }])
    })
    .catch(error => console.log(error))
}
  render() {
 
     
          return (
						<div className="lists-container">
						{this.state.trails.map( trail => {
							return(
              <div className="single-trail" key={trail.id}>
                <h2>Trail Information</h2>
                <h4>{trail.id}</h4>
							</div>)

								})}
						</div>
					)
				}
			}
			
			
    


export default TrailInfoSmall;