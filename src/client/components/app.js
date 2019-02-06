import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from '../styling/app.css';
import Map from './map';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <div id="main" className={styles.login}>
                <h1>RADIUS</h1>
                <h2>Login: </h2>
                <form>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} />
                    <label>Password: </label>
                    <input type="text" name="password" value={this.state.password} />
                    <input type="submit" value="Submit" />
                </form>
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
