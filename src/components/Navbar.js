import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/navbar.css"
import lg from "../assets/pexels-drew-rae-580679.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to = "/"><img src={lg} style={{ borderRadius: '30px' }} alt="Logo" /></Link>
          </div>
          <ul className="nav-links">
            <div className="d-flex flex-row">
              <li className="p-2"><Link to ="/research" style={{ fontFamily: '"Bruno Ace SC", cursive' }}>Research</Link></li>
              <li className="p-2"><Link to ="/publications" style={{ fontFamily: '"Bruno Ace SC", cursive' }}>Publication</Link></li>
              <li className="p-2"><Link to ="/news" style={{ fontFamily: '"Bruno Ace SC", cursive' }}>Projects</Link></li>
              <li className="p-2"><Link to ="/contactus" style={{ fontFamily: '"Bruno Ace SC", cursive' }}>About Us</Link></li>
              <li className="p-2"><Link to ="/contactus" style={{ fontFamily: '"Bruno Ace SC", cursive' }}>Contact Us</Link></li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;