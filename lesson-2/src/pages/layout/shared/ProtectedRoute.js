import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../../services';
import { LOGIN } from '../Contants';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
    const user = getUser()
   return (
      <Route {...rest} render={props => {
         if (user && user.isLoggedIn) {
            return Component ? <Component {...props} /> : render(props);
         } else {
            return <Redirect to={{pathname: LOGIN, state: {from: props.location}}} />
         }
      }} />
   );
}

export default ProtectedRoute;