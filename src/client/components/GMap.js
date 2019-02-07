import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { JobPost } from './JobPost'
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);

  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat, lng: this.props.lng
        }}
        center={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
          onClick={this.onMarkerClick} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <JobPost jobObj={this.props.jobObj} />
        </InfoWindow>
      </ Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAHiN7rsT9iRbCMD0WZpvsKekT8riDnYp0'
})(MapContainer);

