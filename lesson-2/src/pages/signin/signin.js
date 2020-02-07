import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { authenticationUser, getUser } from '../../services/index';
import { HOME } from '../layout/Contants';
const SignIn = ({ history, location, ...rest }) => {
  console.log('login-location:::', location);
  const [state, setState] = useState({});

  const handleChange = event => {
    const { value, name, id } = event.currentTarget;
    console.log(value, name, id);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    authenticationUser(state).then(user => {
      console.log('saved user:::', user);
      alert('saved user successfully!');
      location && location.state
        ? history.replace(location.state.from.pathname)
        : history.push({ HOME });
    });
  };

  const user = getUser();
  if (user && user.isLoggedIn) {
    return location && location.state ? (
      <Redirect to={location.state.from.pathname} />
    ) : (
      <Redirect to={HOME} />
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
export default SignIn;
