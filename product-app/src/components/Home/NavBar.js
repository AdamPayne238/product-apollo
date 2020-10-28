import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}

export default NavBar