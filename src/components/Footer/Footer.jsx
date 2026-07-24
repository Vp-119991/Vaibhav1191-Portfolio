import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>Thanks for visiting my portfolio. I’m a student developer passionate about learning, building projects, and improving my skills every day.</p>
        </div>
        
        </div>
        <hr />
        <div className="footer-bottom">
          <p className='footer-bottom-left'>
            © 2026 Vaibhav. All Rights Reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>

  
  )
}

export default Footer