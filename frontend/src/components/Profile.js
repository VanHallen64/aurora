import React, { useEffect, useState } from "react";
import client from '../feathers';

const users = client.service('users');
let user = "";
const Profile = () => {
  const findUser = () => { 
    users.find().then(results => {
      user = results[0];
    });
  }
  
  return (
    
      <div>
        {findUser()}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.id}</p>
        {console.log(user)}
      </div>
  );
};

export default Profile;