import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Home.scss'


const NavBar = () => {

    let { pathname } = useLocation()
    
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                {pathname.includes('/products') && (
                    <div>
                        <h2>/products???</h2>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar