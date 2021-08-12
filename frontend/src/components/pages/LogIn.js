import React, { Component } from "react";
import client from "../../feathers";
import { Link } from "react-router-dom";

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
				password: "",
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.login(this.state.user);
	}

	login(userData) {
		const { email, password } = userData;
		client
			.authenticate({
				strategy: "local",
				email,
				password,
			})
			.then(() => {
				console.log("User Logged In");
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
								Log In
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

export default LogIn;
