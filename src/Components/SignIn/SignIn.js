import React from 'react';
import { isALetter } from '../../Helpers/Helpers.js';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

function SignIn(props) {
  const history = useHistory();
  var username = '';
  var password = '';

  function displayLogo(boolean) {
    return (
      <div>
        <img
          className="golfBuddyLogo"
          alt="Logo Spinner"
          src={require('../../Assets/pin.png')}
          style={{ display: boolean === false ? 'none' : 'block' }}
        />
      </div>
    )
  }

  function handleChange(event) {
    if (event.target.name === 'username') {
      if (isALetter(event.target.value)) {
        username = event.target.value;
      }
    } else {
      if (isALetter(event.target.value)) {
        password = event.target.value;
      }
    }
  };

  function handleClick(event) {
    if (username.length > 0 && password.length > 0) {
      props.setLogoDisplay({ boolean: true });
      if (event.target.value === 'Log In') {
        return props.loginUser({ username, password }, '/api/login', (data) => {
          console.log("logged in")
          props.setLogoDisplay({ boolean: false });
          history.push('/bagCreator');
        });
      } else {
        return props.loginUser({ username, password }, '/api/createUser', (data) => {
          props.setLogoDisplay({ boolean: false });
          history.push('/bagCreator');
        });
      }
    }
  };

  return (
    <div className="signInContainer">
      { displayLogo(props.logoDisplay) }
      <div className="inputContainer">
        <h2>Sign In</h2>
        <input placeholder="username" name="username" onChange={handleChange} />
        <input placeholder="password" type="password" name="password" onChange={handleChange} />
        <input type="submit" value="Log In" onClick={handleClick}/>
        <input type="submit" value="Create New Account" onClick={handleClick}/>
      </div>
    </div>
  )
};

export default SignIn;