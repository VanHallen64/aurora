import React, { Component } from "react";

class LoginButton extends Component {
	render() {
		return (
			<main className="login container">
				<div className="row">
					<div className="col-12 col-6-tablet push-3-tablet text-center heading">
						<h1 className="font-100">Log in or signup</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
						<form className="form">
							<fieldset>
								<input className="block" type="email" name="email" placeholder="email" />
							</fieldset>

							<fieldset>
								<input className="block" type="password" name="password" placeholder="password" />
							</fieldset>

							<button type="button" id="login" className="button button-primary block signup">
								Log in
							</button>

							<button type="button" id="signup" className="button button-primary block signup">
								Sign up and log in
							</button>

							<a className="button button-primary block" href="/oauth/github">
								Login with GitHub
							</a>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default LoginButton;