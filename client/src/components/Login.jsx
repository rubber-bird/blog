import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    console.log('username', username, 'password', password)
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
