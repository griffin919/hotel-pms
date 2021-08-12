import React from 'react'
import '../components/header.css';
import NavDrawer from './NavDrawer'


const Header = () => {
    return (
        <header className='header-wrapper'>
            <NavDrawer/>
            <h3>hello, user</h3>
        </header>
    )
}

export default Header


