import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a Computer Engineering student with a strong interest in frontend development. I enjoy creating clean, responsive, and user-friendly web interfaces using technologies like HTML, CSS, JavaScript, and React. I am constantly learning and improving my skills by building projects and exploring modern web design trends.
                        </p>

                        <p>
                            Apart from coding, I am passionate about problem-solving and continuously upgrading my knowledge in web development. My goal is to become a skilled full stack developer and work on real-world projects that make an impact. I am always eager to learn new technologies and grow as a developer.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML </p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>CSS</p> <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>AngularJS</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Javascript</p> <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{ width: "40%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;