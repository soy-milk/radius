import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styling/app.css';
import Map from './map';
import Login from './login';
import { resolve } from 'path';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFormChange = this.handleFormChange.bind(this)
    }
    handleFormSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:4242/login', {
            method: 'POST',
            type: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res));
    }
    handleFormChange(e) {
        e.preventDefault()
        const prop = e.target.name
        const val = e.target.value
        const obj = {}
        obj[prop] = val
        this.setState(obj)
    }
    render() {
        return (
            <div id="main" className={styles.login}>
                <h1>RADIUS</h1>
                <h2>Login: </h2>
                <Login username={this.state.username} password={this.state.password} handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit} />
                <hr></hr>
                <h2>Jobs Near You Right Now: </h2>
                <div id="map">
                    <Map />
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
export default App;
