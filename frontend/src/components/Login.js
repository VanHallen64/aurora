import React, { Component } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

class Login extends Component {
  render() { 
    return ( 
      <a id="login-button" href="http://localhost:3030/oauth/auth0" role="button">Log In</a>
    );
  }
}
 
export default Login;