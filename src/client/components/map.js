import React, { Component } from 'react';
import { render } from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import styles from '../styling/app.css';


const mapStyles = {
    width: '60%',
    height: '60%'
  };
  
 class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 40.785091,
           lng: -73.968285
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB1jRwR7Y5BnZ32ZAXH9jiNRJyCF68kW-s'
  })(MapContainer);