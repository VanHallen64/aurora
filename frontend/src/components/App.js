import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import client from "../feathers";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import AuthButton from "./AuthButton";

function App() {
	const [loginState, setLogin] = useState(undefined);

	useEffect(() => {
		// Try to authenticate with the JWT stored in localStorage
		client.authenticate().catch(() => setLogin(false));

		// On successfull login ...
		client.on("authenticated", (login) => {
			// ... update the state
			setLogin(true);
		});
	});

	if (loginState === undefined) return <h1>Loading...</h1>;
	return (
		<div className="App">
			<Router>
				<div>
					<h1>Aurora</h1>
					<nav>
						<AuthButton isLoggedIn={loginState} setLogin={setLogin} />
					</nav>
				</div>
				<Switch>
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/home" component={Home} />
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
