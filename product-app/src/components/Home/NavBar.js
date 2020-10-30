import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Home.scss'


const NavBar = () => {

    let { pathname } = useLocation()
    
    return (
        <div className="nav-container">

    
            <div className="nav-header">
                <h1>Fruit Spring</h1>
            </div>

            <div className="nav-links">
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
    
        </div>
    )
}

export default NavBar