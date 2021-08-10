import React, { Component } from "react";
import { Link } from "react-router-dom";
import client from "../feathers";

class LoginButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.register = this.register.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.register();
	}

	register() {
		const credentials = this.state;
		// Try to authenticate using an existing token
		client.reAuthenticate();

		try {
			// Otherwise log in with the `local` strategy using the credentials we got
			client.authenticate({
				strategy: "local",
				...credentials,
			});
			// If successful, show the chat page
			console.log("User Logged In");
		} catch (error) {
			// If we got an error, show the login page
			console.log(error);
		}
	}

	render() {
		return (
			<div className="login container">
				<fieldset className="border p-3 rounded">
					<legend className={`border rounded p-1 text-center`}></legend>
					<form onSubmit={this.handleSubmit} noValidate autoComplete="off">
						<div className="form-group">
							<label htmlFor="inputForEmail">Email address</label>
							<span className="mandatory">*</span>
							<input
								id="inputForEmail"
								name="email"
								type="email"
								className="form-control"
								aria-describedby="Enter email address"
								placeholder="Enter email address"
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputForName">Your Name</label>
							<span className="mandatory">*</span>
							<input
								id="inputForName"
								type="text"
								className="form-control"
								aria-describedby="Enter your name"
								placeholder="Enter your name"
								value={this.state.name}
								onChange={(e) => this.setState({ name: e.target.value })}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputForPassword">Password</label>
							<span className="mandatory">*</span>
							<input
								type="password"
								className="form-control"
								id="inputForPassword"
								placeholder="Enter password"
								value={this.state.password}
								onChange={(e) => this.setState({ password: e.target.value })}
							/>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<button type="submit" className="btn btn-outline-primary">
								Submit
							</button>
							<button className="btn btn-link">
								<Link to="/">Cancel</Link>
							</button>
						</div>
					</form>
				</fieldset>
			</div>
		);
	}
}

export default LoginButton;
