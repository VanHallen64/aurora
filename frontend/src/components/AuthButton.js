import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import LogoutButton from "./LogoutButton";

class AuthButton extends Component {
	render() {
		console.log(this.props.isLoggedIn);
		if (this.props.isLoggedIn) {
			return <LogoutButton setLogin={this.props.setLogin} />;
		} else {
			return (
				<div>
					<Link to="/login">Log In</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
			);
		}
	}
}

export default AuthButton;
