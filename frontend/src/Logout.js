import React, { Component } from 'react';
import client from './feathers';
import { withRouter, Link } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //host: 
            client_id: "whVsI27UTmyIB5TTvz9eOXMKnWWEd5OD",
            url: "https://dev-5unyqz7w.us.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000/&client_id=DUXHkFTVxQkKnw0gJMSNr0NNlxSQUr9r"
        }
        this.logOut = this.logOut.bind(this);
    }
    redirect() {
        window.location.reload();
        //client.
    }
    logOut() {
        client.logout().then(console.log(client.get('authentication')));
        window.location.href = this.state.url;
    }
    render() {
        return (<button onClick = {this.logOut}> Log out</button>);
    }
}
 
export default withRouter(Logout);