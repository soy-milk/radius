import React, { Component } from 'react';
import { render } from 'react-dom';
// import styles from '../styling/app.css';
import MapContainer from './GMap'

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            jobObj: null,
            lat: 40.7128,
            lng: -74.0060,
        }
        this.handleChange = this.handleChange.bind(this);
        this.makeFetch = this.makeFetch.bind(this);
    }

    handleChange(event) {
        this.setState({ city: event.target.value });
    }

    async makeFetch(event) {
        event.preventDefault();
        let jobs = await fetch("http://localhost:4242/jobs", {
            method: 'POST',
            body: JSON.stringify({ strings: this.state.city }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let jobsJSON = await jobs.json();
        let geoTarg = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.city}&key=AIzaSyAHiN7rsT9iRbCMD0WZpvsKekT8riDnYp0`)
        let geoJSON = await geoTarg.json();
        let lat = geoJSON.results[0].geometry.location.lat;
        let lng = geoJSON.results[0].geometry.location.lng;

        this.setState({
            jobObj: jobsJSON,
            lat: lat,
            lng: lng
        })
    }


    render() {
        return (
            <div>
                <h2>Submit your city: </h2>
                <form>
                    <input id="jobs" type="text" name="city" onChange={this.handleChange} value={this.state.city} />
                    <input type="submit" value="Submit" onClick={this.makeFetch} />
                </form>
                <MapContainer lat={this.state.lat} lng={this.state.lng} jobObj={this.state.jobObj} />
            </div>
        )
    }
}

export default Map;
