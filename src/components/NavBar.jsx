import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id='#navbar'>
        <Link id='home-click' to='/'>Home</Link>
        <Link id='add-click' to="/players/add">Add player</Link>
        </nav>
    )
}

export default NavBar