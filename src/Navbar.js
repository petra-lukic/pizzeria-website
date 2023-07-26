import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "./images/logo.png"
import burger from "./images/burger.png"
import "./Navbar.css"

export default function Navbar () {
    const [showLinks, setShowLinks] = useState(false)
    const toggleMenu = () => setShowLinks(!showLinks)
    const closeMenu = () => setShowLinks(false)
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };  
        
    return (
        <div>
            <nav id="navbar">
                <Link to="/" id="logo" onClick={scrollToTop}><img src={logo} alt="logo" id="logo"/></Link>
                <ul>
                    <Link to="/" className="link" onClick={scrollToTop}><li>home</li></Link>
                    <Link to="/about" className="link" onClick={scrollToTop}><li>about</li></Link>
                    <Link to="/menu" className="link" onClick={scrollToTop}><li>menu</li></Link>
                    <a href="#contact" className="link"><li>contact</li></a>
                </ul>
                <button className="burger" onClick={toggleMenu}>
                    <img src={burger} alt="" />
                </button>
            </nav>
            <div id={showLinks ? "hidden" : ""}>
                <ul>
                    <Link to="/" className="link"><li onClick={() => { closeMenu(); scrollToTop(); }}>home</li></Link>
                    <Link to="/about" className="link"><li onClick={() => { closeMenu(); scrollToTop(); }}>about</li></Link>
                    <Link to="/menu" className="link"><li onClick={() => { closeMenu(); scrollToTop(); }}>menu</li></Link>
                    <a href="#contact" className="link"><li onClick={closeMenu}>contact</li></a>
                </ul>
            </div>
        </div>
    )
}