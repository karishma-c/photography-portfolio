import * as React from 'react'
import { Link } from 'gatsby'
import {
    navbar,
    navItems,
    logo,
    logoName,
    navLinks, 
    linkActive
} from './../styles/navbar.module.css'

const Navbar = ({ pageTitle }) => {

    return (
        <div>
            <title>{pageTitle}</title>
            <nav className={navbar}>
                <div className={logo}>
                    <h1 className={logoName}>VJ</h1>
                </div>
                <ul className={navItems}>
                    <li className={navLinks}><Link to="/" className={linkActive}>Work</Link></li>
                    <li className={navLinks}><Link to="/about" >About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
  
export default Navbar

   