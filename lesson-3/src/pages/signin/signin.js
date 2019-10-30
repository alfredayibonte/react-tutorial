import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationUser, getUser } from '../../services/index';
import { ERRORS } from './signin.utils'
const initialState = { errors: {}, input: {} }
const SignIn  = ({history, location, ...rest }) => {
    const [state, setState] = useState(initialState)
    const handleChange = (event) => {
       const { value, name, id } = event.currentTarget;
       setState({
            ...state,
            input: { ...state.input, [name]: value },
            errors: { ...ERRORS[name](state.errors, name, value) }
        })
    }
    const handleSubmit = (event) => {
         event.preventDefault()
         authenticationUser(state)
         .then((user) => {
             console.log('saved user:::', user)
             alert('saved user successfully!')
            location && location.state ? history.replace(location.state.from.pathname) : history.push('/home')
         })
    }
    const user = getUser();
    if(user && user.isLoggedIn){ 
        return (<Redirect to={location.state.from.pathname} />)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                        <input id='email' type='text' name='email'  onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' name='password'  onChange={handleChange}/>
                </div>
                <div>
                    <input  type='submit'/>
                </div>
            </form>
        </div>
    )
}
export default SignIn;