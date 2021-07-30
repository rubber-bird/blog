import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    const requestObject = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };

    console.log('submit', requestObject);
  }

  return (
    <div>
      <h1>Register</h1>

      <form>
        <label>
          Username:
          <input
            type='text'
            onChange = {
              (event) => setUsername(event.target.value)
            }
          ></input>
        </label>

        <label>
          Email:
          <input
            type='email'
            onChange = {
              (event) => setUsername(event.target.value)
            }
          ></input>
        </label>

        <label>
          Password:
          <input
            type='password'
            onChange = {
              (event) => setPassword(event.target.value)
            }
          ></input>
        </label>

        <label>
          First Name:
          <input
            type='text'
            onChange = {
              (event) => setFirstName(event.target.value)
            }
          ></input>
        </label>

        <label>
          Last Name:
          <input
            type='text'
            onChange = {
              (event) => setLastName(event.target.value)
            }
          ></input>
        </label>

        <input
          type = 'button'
          value = 'Submit'
          onClick = {
            (event) => handleSubmit()
          }
        ></input>
      </form>
    </div>
  );
};

export default Register;
