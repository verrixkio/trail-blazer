import React, { Component } from 'react';
import {Map, InfoWindow, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  onPolylineClick(props, marker, e) {
    console.log('!!!!!!!!!!!!!!!!!')
  }
  render() {
    const trail1 = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190},
      {lat: 51.045015, lng: -114.069984}
    ];
  
    return (
      
      <Map
       google={this.props.google} 
       initialCenter={{
          lat: 51.045015,
          lng: -114.069984
        }}
        zoom={12}
        >
       
      <Polyline
      path={trail1}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={5}  
      Marker onClick={this.onPolylineClick}
      name={'Current location'} />

          </Map> 
    
   
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDogOOtZl3ChFa_gEgwpDaadpSKP_EKtmk')
})(MapContainer)