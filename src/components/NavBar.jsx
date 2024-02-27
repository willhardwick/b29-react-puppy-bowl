import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <Link id='home-click' to='/'>Home</Link>
        <label for="search" id="search-label ">Search</label>
        <input type="text" name="name" id="search-input"></input>
        <button type='submit' id='search-button'>Find player</button>
        </nav>
    )
}

export default NavBar