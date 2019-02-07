import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleFormSubmit}>
          <label>Username: </label>
          <input type="text" name="username" value={this.props.username} onChange={this.props.handleFormChange} />
          <label>Password: </label>
          <input type="text" name="password" value={this.props.password} onChange={this.props.handleFormChange} />
          <input type="submit" value="Submit" />
          <input type="button" value="Sign Up" onClick={this.props.handleSignup} />
        </form>
      </div>

    )
  }
}

export default Login;