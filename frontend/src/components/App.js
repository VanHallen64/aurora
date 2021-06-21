import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Home from './Home';
import NavBarLogin from './NavBarLogin';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<NavBarLogin/>
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

export default App;