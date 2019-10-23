import React from 'react'
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import TopNav from '../../components/TopNav/TopNav'
import Home from '../home/home'
import Shop from '../shop/shop'
import BookList from '../books/BookList'
import BookShow from '../books/BookShow'
import SignInPage from '../signin/signin'
import { getUser } from '../../services'
import './index.style.scss'
const Layout = () => {
    const user = getUser()
    return (
    <div>
         <Router>
            <TopNav />
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route
                        path='/shop'
                        render={
                            props => {
                                if(user && user.isLoggedIn)
                                    return <Shop user={user} {...props}/>
                                else return <Redirect to='/login' />
                            }
                         }/>
                    <Route exact path='/books' component={BookList} />
                    <Route  path='/books/:id' component={BookShow} />
                    <Route  path='/login' component={SignInPage} />
                </Switch>
        </div>
        </Router>
    </div>)
}

export default Layout;