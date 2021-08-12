import React, { Component } from "react";
import client from "../feathers";
import { withRouter } from "react-router-dom";

class LogoutButton extends Component {
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
	}
	logOut() {
		client.logout();
		this.props.setLogin(false);
		this.props.history.push("/");
	}
	render() {
		return <button onClick={this.logOut}>Log out</button>;
	}
}

export default withRouter(LogoutButton);
