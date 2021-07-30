import React, { useState } from 'react';

import login from '../api/auth/login.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    const requestObject = {
      username: username,
      password: password
    };

    login(requestObject)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label>Username:
          <input
            type='text'
            name='name'
            onChange={
              (event) => setUsername(event.target.value)
            }
          ></input>
        </label>

        <label>Password:
          <input
            type='password'
            name='password'
            onChange={
              (event) => setPassword(event.target.value)
            }
          ></input>
        </label>

        <input
          type='button'
          value='Submit'
          onClick = {
            (event) => handleSubmit(event)
          }
        ></input>
      </form>
    </div>
  );
};

export default Login;
