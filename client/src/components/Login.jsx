import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import login from '../api/auth/login.js';

const LoginMutation = gql`
  mutation login(
    $username: String!
    $password: String!
    ) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [loginFunc, {data, loading, error}] = useMutation(LoginMutation);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loginFunc({
      variables: {
        username: username,
        password: password
      }
    })
      .then(({data}) => {
        console.log(data.login.token);
      })
    // const requestObject = {
    //   username: username,
    //   password: password
    // };

    // login(requestObject)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
  }

  if (loading) return <h2>Loading....</h2>
  if (error) {
    console.log(error)
    return <h2>Error</h2>
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
