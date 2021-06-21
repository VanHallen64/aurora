import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import client from '../feathers';
import Logout from './Logout';
import Home from './Home';
import Login from './Login';

function App() {
	const [loginState, setLogin] = useState(undefined);

	useEffect(() => {
		// Try to authenticate with the JWT stored in localStorage
		client.authenticate().catch(() => setLogin(null));

		// On successfull login ...
		client.on('authenticated', login => {
			// ... update the state
			setLogin(login);
		});
	});

	if (loginState === undefined) {
		return <h1>Loading...</h1>
	} else if (loginState) { // If user is logged in
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Logout/>
					</header>
					<div id="content">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
	return <Login/>;
}

export default App;