import React, { Component } from 'react';
import { render } from 'react-dom';
// import styles from '../styling/app.css';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeFetch = this.makeFetch.bind(this);
    }

    handleChange(event) {
        console.log("EVENT", event.target.value)
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.setState(prevState => ({
            city: ""
        }))
        event.preventDefault();
    }

    makeFetch(event) {
        console.log("MAKE FETCH LINE 28", this.state.city)
        fetch("http://localhost:4242/jobs", {
          method: 'POST', 
          body: JSON.stringify({ strings: this.state.city }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => console.log(res))
          .then(json => console.log(json));
        event.preventDefault();
    }

    render() {
        return (
            <div id="map">
                <h2>Submit your city: </h2>
                <form>
                <input id= "jobs" type="text" name="city" onChange={this.handleChange} value={this.state.city}/>
                <input type="submit" value="Submit" onClick = {this.makeFetch}/>
                </form> 
                <h1>MAP COMPONENT</h1>
            </div>
        )
    }
}

export default Map;