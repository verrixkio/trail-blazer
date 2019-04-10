import React, { Component } from 'react';
import axios from 'axios';
import FixPopUp from './FixPopUp';


class TrailFixRequestDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            solutions: [],
            donations: [],
            solutionid: '',
            showPopup: false
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/trails/api/v1/trail_solutions.json')
        .then(response => {
            this.setState({
                solutions: response.data
            })
        })
        .catch(error => console.log(error))

        axios.get('http://localhost:3000/trails/api/v1/donations.json')
        .then(response => {
            this.setState({
                donations: response.data
            })
        })

   /*         let donations = response.data
            solutions.forEach(function (solution) {
                donations.forEach(function(donation) {
                    if (solution.id == donation.trail_solutions_id)
                    solution.donation = donation
                })
            })*/
            
        .catch(error => console.log(error))
        
    }
    



       togglePopup = (solution) => {
    this.setState({
      showPopup: !this.state.showPopup,
      solution: solution,
      solutionid: solution.id
    });

    
    
  }
render() {
    
    return (

        
  <div>

        {this.state.solutions.map( solution => {
            
            
            if (solution.trails_id == this.props.trail_id ) {
            return (
                
                   <div className="single-solution" key={solution.id}>
                   <h3><strong>Request to Fix Trail: </strong></h3>      
                   <p className="trail-fix">{solution.description_to_fix}</p>
                    

                    <button className="donate" onClick={() => this.togglePopup(solution)}>+ Donate to Fix Trail</button>  
                    {this.state.showPopup && this.state.solutionid === solution.id? 
                    <FixPopUp
                        text='Close Me'
                        solution={this.state.solution}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null }
                    
                    
                
        
                
        {this.state.donations.map( donation => {
            if (donation.trail_solutions_id == solution.id) {
            return (
            <div className="donation-thank-you">
                <p><strong>Thank you to: </strong><span>{donation.name}</span><br />
                <strong>Donation Amount: </strong><span>{donation.amount}</span></p>
            </div>)
            
            }
        })} 

        </div>
    )
    } } 
    ) }

    {/* <h1>thank you all contributors!</h1> */}

    {/* Map over previous donations */}
    {this.state.donations.map( donation => {
        if (donation.trails_id == this.props.trail_id ) {
        return (
            <div className="donation-thank-you">
                <p><strong>{donation.name}: </strong><span>{donation.amount}</span></p>
            </div>
            )
        }
    })} 

    </div>
)}}

export default TrailFixRequestDisplay;