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
        this.handleGet = this.handleGet.bind(this)
    }
    handleGet() {
        fetch('http://localhost:4242', {
            method: 'GET',
            type: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    handleFormSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:4242/login', {
            method: 'POST',
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
        this.setState({
            username: "",
            password: ""
        })
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
                <button onClick={this.handleGet}>Hola</button>
                <h2>Login: </h2>
                <Login username={this.state.username} password={this.state.password} handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit} />
                <hr></hr>
                <div>
                    <Map />
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
export default App;
