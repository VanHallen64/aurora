import React, { useState, useEffect } from 'react';
import client from '../feathers';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

function NavBarLogin() {
	const [loginState, setLogin] = useState(null);

	// useEffect(() => {
	// 	// Try to authenticate with the JWT stored in localStorage
	// 	client.authenticate().catch(() => setLogin(null));

	// 	// On successfull login ...
	// 	client.on('authenticated', login => {
	// 		// ... update the state
	// 		setLogin(login);
	// 	});
	// });
	if (loginState === undefined) {
		return <h1>Loading...</h1>
	} else if (loginState) { // If user is logged in
		return (
			<LogoutButton/>
		);
	}
	return <LoginButton/>;
}
 
export default NavBarLogin;