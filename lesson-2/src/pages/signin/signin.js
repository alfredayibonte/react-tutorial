import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticationUser, getUser } from '../../services/index';
const SignIn  = ({history}) => {
    const [state, setState] = useState({})
    const handleChange = (event) => {
       const { value, name, id } = event.currentTarget;
       console.log(value, name, id)
       setState({ ...state, [name]: value })
    }
    const handleSubmit = (event) => {
         event.preventDefault()
         authenticationUser(state)
         .then((user) => {
             console.log('saved user:::', user)
             alert('saved user successfully!')
             history.replace('/')
         })
    }
    const user = getUser();
    if(user && user.isLoggedIn){ 
        return (<Redirect to='/' />)
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