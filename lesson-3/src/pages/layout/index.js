import React from 'react'
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import TopNav from '../../components/TopNav/TopNav'
import Home from '../home/home'
import Shop from '../shop/shop'
import BookList from '../books/BookList'
import BookShow from '../books/BookShow'
import SignInPage from '../signin/signin'
import { getUser } from '../../services'
import PageNotFoundCompoment from '../static-pages/page-not-found'
import './index.style.scss'
import ProtectedRoute from './shared/ProtectedRoute';
import { NOT_FOUND, LOGIN } from './Contants'
const Layout = () => {
    const user = getUser()
    return (
    <div>
         <Router>
            <TopNav />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <ProtectedRoute component={Shop} path='/shop' />
                    <Route exact path='/books' component={BookList} />
                    <Route  path='/books/:id' component={BookShow} />
                    <Route  path={LOGIN} component={SignInPage} />
                    <Route  path={NOT_FOUND} component={PageNotFoundCompoment} />
                    <Redirect to={NOT_FOUND}/>
                </Switch>
        </div>
        </Router>
    </div>)
}

export default Layout;