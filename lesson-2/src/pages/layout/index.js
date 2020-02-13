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
import { getUser, logoutUser } from '../../services';
import PageNotFoundCompoment from '../static-pages/page-not-found';
import './index.style.scss';
import ProtectedRoute from './shared/Protected-Route';
import { NOT_FOUND, LOGIN, HOME, SHOP, BOOKS, LOGOUT } from './Contants';
const Layout = () => {
  const user = getUser();

  return (
    <div>
      <Router>
        <TopNav user={user} />
        <div>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <ProtectedRoute component={Shop} path={SHOP} />
            <ProtectedRoute exact path={BOOKS} component={BookList} />
            <Route path="/books/:id" component={BookShow} />
            <Route
              path={LOGOUT}
              render={props => {
                if (user && user.isLoggedIn) {
                  logoutUser();
                  return <Redirect to={LOGIN} />;
                }
              }}
            />
            <Route path={LOGIN} component={SignInPage} />
            <Route path={NOT_FOUND} component={PageNotFoundCompoment} />
            <Redirect to={NOT_FOUND} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
