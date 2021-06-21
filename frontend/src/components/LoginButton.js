import React, { Component } from 'react';

class LoginButton extends Component {
  render() { 
    return ( 
      <a id="login-button" href="http://localhost:3030/oauth/auth0" role="button">Log In</a>
    );
  }
}
 
export default LoginButton;