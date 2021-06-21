import React, { Component } from 'react';
import client from '../feathers';
import Profile from './Profile';

class Home extends Component {
    render() { 
        
        return (
            <>
                <h1>Home Page</h1>
                <button onClick = {() => console.log(client.authentication)}>Check login status</button>
            </>
        );
    }
}
 
export default Home;