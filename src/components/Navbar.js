import * as React from 'react'
import { Link } from 'gatsby'
import {
    navbar,
    navItems,
    logo,
    logoName,
    navLinks
} from './../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbar}>
            <div className={logo}>
                <h1 className={logoName}>Vj</h1>
            </div>
            <ul className={navItems}>
                <li className={navLinks}><Link to="/">Home</Link></li>
                <li className={navLinks}><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
  }
  
export default Navbar

   