import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "77332782-7b45-4437-ba4b-290ce008424e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        event.target.reset(); // form clear
      } else {
        alert("❌ Failed to send message. Try again!");
      }

    } catch (error) {
      alert("⚠️ Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Let’s connect and learn something new together.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>vp07032006@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9173749109</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Vasad</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

          <button type="submit" className='contact-submit'>
            Submit now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact  