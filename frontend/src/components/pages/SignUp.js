import React, { Component } from "react";
import { Link } from "react-router-dom";
import client from "../../feathers";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
				password: "",
				name: "",
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.register(this.state.user);
	}

	register(userData) {
		const usersService = client.service("users");
		usersService
			.create(userData)
			.then(() => {
				console.log("User created");
				this.authenticateUser(userData);
			})
			.catch((e) => console.log("Couldn't create user", e));
	}

	authenticateUser(user) {
		const { email, password } = user;
		client
			.authenticate({
				strategy: "local",
				email,
				password,
			})
			.then(() => {
				console.log("User Logged In");
				console.log(this.state);
			})
			.catch((e) => console.log(e));
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
								onChange={(e) => {
									const user = { ...this.state.user };
									user.email = e.target.value;
									this.setState({ user });
								}}
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
								onChange={(e) => {
									const user = { ...this.state.user };
									user.name = e.target.value;
									this.setState({ user });
								}}
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
								onChange={(e) => {
									const user = { ...this.state.user };
									user.password = e.target.value;
									this.setState({ user });
								}}
							/>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<button type="submit" className="btn btn-outline-primary">
								Sign Up
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

export default SignUp;
