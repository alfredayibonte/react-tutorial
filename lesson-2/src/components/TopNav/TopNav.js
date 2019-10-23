import React from 'react';
import { Link } from 'react-router-dom';

import './top-nav.style.scss'
const TopNav = (props) => {
    return (
        <div className='topNavContainer'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
        </div>
    )
}
export default TopNav;