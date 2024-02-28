import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <Link id='home-click' to='/'>Home</Link>
        <Link to="/players/add">Add player</Link>
        </nav>
    )
}

export default NavBar