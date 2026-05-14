import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import Vaibhav from '../../assets/Vaibhav.pdf'

const Hero = () => {

    const openResume = () => {
        window.open(Vaibhav, "_blank")
    }

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />

            <h1>
                <span> I'm Vaibhav Prajapati, </span>
                a passionate Frontend Developer and Computer Engineering student.
            </h1>

            <p>
                I am currently pursuing my degree and learning modern web
                development skills like HTML, CSS, JavaScript, and React to
                build responsive and user-friendly websites.
            </p>

            <div className="hero-action">

                <a href="#contact" className="nav-connect">
                    Connect With Me
                </a>

                <div className="hero-resume" onClick={openResume}>
                    My Resume
                </div>

            </div>
        </div>
    )
}

export default Hero;