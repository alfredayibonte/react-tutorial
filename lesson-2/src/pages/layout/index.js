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
                    <Route  path='/login' component={SignInPage} />
                    <Route  path='/404' component={PageNotFoundCompoment} />
                    <Redirect to='/404'/>
                </Switch>
        </div>
        </Router>
    </div>)
}

export default Layout;