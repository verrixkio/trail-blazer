import React, { Component } from 'react';
import {Map, InfoWindow, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
const decodePolyline = require('decode-google-map-polyline');
export class MapContainer extends Component {
    constructor(props){
    super(props)
    this.state = {
        trails: []
    }
  }
  componentDidMount() {
    axios.get('api/v1/trails.json')
      .then(response => {
        console.log(response.data)
          this.setState({
            trails: response.data
    })
  })
    .catch(error => console.log(error))
}
 
  onPolylineClick(props, marker, e) {
    console.log(props)
  }
    colorSelect(trail) {
      if (trail.difficulty < 3) {
        return "#7CFC00"
      } else return "#ff0000"
    }

  
  render() {


   
  
    return (
      
      <Map
       google={this.props.google} 
       
       initialCenter={{
          lat: 51.045015,
          lng: -114.069984
        }}
        zoom={12}
        >
       {this.state.trails.map(trail => 
      
      <Polyline
      path={decodePolyline(trail.coded_path)}
      
      strokeColor= {this.colorSelect(trail)}
      strokeOpacity={0.8}
      strokeWeight={5}  
      Marker onClick={this.onPolylineClick}
      name={'Current location'}
      data={trail}
       />)}
      
          </Map> 
    
   
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDogOOtZl3ChFa_gEgwpDaadpSKP_EKtmk')
})(MapContainer)