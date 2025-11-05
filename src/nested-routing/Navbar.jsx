import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav>
            {/* logo */}
            <NavLink to='/'>My Website</NavLink>
            {/* Hamburger menu icon */}
            <div className='menu-icon'>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* nav links */}
            <ul className={menuOpen ? "show" : ""}>
                {/* home */}
                <li>
                    <NavLink to='/' className={({isActive})}>

                    </NavLink>
                </li>

            </ul>


        </nav>
    )
}

export default Navbar
