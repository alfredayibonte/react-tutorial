import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/index';

import './top-nav.style.scss';
const TopNav = props => {
  const user = getUser();

  return (
    <div className="topNavContainer">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      {user && user.isLoggedIn ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
export default TopNav;
