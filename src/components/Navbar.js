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
import { Row, Col } from 'react-bootstrap'

const Navbar = ({ pageTitle }) => {

    return (
        <Row>
            <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
                <title>{pageTitle}</title>
                <nav className="col-12 col-sm-12 col-md-10 col-lg-12 col-xl-12 mx-auto" className={navbar}>
                    <div className="col-xl-6" className={logo} >
                        <h1 className={logoName}>VJ</h1>
                    </div>
                    <ul className="col-xl-6 " className={navItems}  >
                        <li className={navLinks}><Link to="/" className={linkActive}>Work</Link></li>
                        <li className={navLinks}><Link to="/about" >About</Link></li>
                    </ul>
                </nav>
            </Col>
        </Row>
    )
}
  
export default Navbar

   