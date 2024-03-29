import React, { Component } from 'react';
import client from '../feathers';
import * as settings from '../settings.json';

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: settings.LOGOUT_URL
        }
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        client.logout();
        window.location.href = this.state.url;
    }
    render() {
        return (<button onClick = {this.logOut}>Log out</button>);
    }
}
 
export default LogoutButton;