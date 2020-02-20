import React from 'react';
import { Link } from 'react-router-dom';

import {
  LOGIN,
  HOME,
  SHOP,
  LOGOUT,
  BOOKS,
  PRODUCTS
} from '../../pages/layout/Contants';
import './top-nav.style.scss';
const TopNav = props => {
  return (
    <div className="topNavContainer">
      <Link to={HOME}>Home</Link>
      <Link to={SHOP}>Shop</Link>
      <Link to={BOOKS}>Books</Link>
      <Link to={PRODUCTS}>Products</Link>
      {props.user && props.user.isLoggedIn ? (
        <Link to={LOGOUT}>Logout</Link>
      ) : (
        <Link to={LOGIN}>Login</Link>
      )}
    </div>
  );
};
export default TopNav;
