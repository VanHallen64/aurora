import React, { Component } from "react";

class LoginButton extends Component {
	render() {
		return (
			<a id="login-button" href="http://localhost:3030/oauth/auth0" role="button">
				Log In
			</a> // Log in button redirects to the Auth0 log in page
		);
	}
}

export default LoginButton;
