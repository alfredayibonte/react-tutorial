import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';
import Home from '../home/home';
import Shop from '../shop/shop';
import BookList from '../books/BookList';
import BookShow from '../books/BookShow';
import SignInPage from '../signin/signin';
import { getUser, logoutUser } from '../../services/index';
import './index.style.scss';
const Layout = () => {
  const user = getUser();

  return (
    <div>
      <Router>
        <TopNav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/shop"
              render={props => {
                if (user && user.isLoggedIn) {
                  return <Shop {...props} user={user} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            />
            <Route exact path="/books" component={BookList} />
            <Route path="/books/:id" component={BookShow} />
            <Route path="/login" component={SignInPage} />

            <Route
              path="/logout"
              render={props => {
                logoutUser();
                return <Redirect to="/login" />;
              }}
            />
            <Route
              path="*"
              render={props => {
                return <div>Page Not Found</div>;
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
