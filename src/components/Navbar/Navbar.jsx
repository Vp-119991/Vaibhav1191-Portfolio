import React, { useState, useRef } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [active, setActive] = useState("Home")
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
 const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      {/* Menu */}
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li 
          className={active === "Home" ? "active" : ""} 
          onClick={() => setActive("Home")}
        >
          <a href="#home"><p>Home</p></a>
        </li>

        <li 
          className={active === "About Me" ? "active" : ""} 
          onClick={() => setActive("About Me")}
        >
          <a href="#about"><p>About Me</p></a>
        </li>

        <li 
          className={active === "Education" ? "active" : ""} 
          onClick={() => setActive("Education")}
        >
          <a href="#education"><p>Education</p></a>
        </li>

        <li 
          className={active === "Portfolio" ? "active" : ""} 
          onClick={() => setActive("Portfolio")}
        >
          <a href="#mywork"><p>My Work</p></a>
        </li>

        <li 
          className={active === "Contact" ? "active" : ""} 
          onClick={() => setActive("Contact")}
        >
          <a href="#contact"><p>Contact</p></a>
        </li>

      </ul>

      {/* Button */}
      <a href="#contact" className="nav-connect">
  Connect With Me
</a>

    </div>
  )
}

export default Navbar