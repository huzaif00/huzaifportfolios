import React from 'react'
import "./contact.css"

import contact__img from "./img/about-9.jpg"
function Contact() {
  return (
    <div className='contact component__space' id='Contact'>
      <div className="row">
        <div className="col__2">
            <div className="contact__box">
                <div className="contact__meta">
                    <h1 className="hire__text">Hire Me.</h1>
                    <p className="hire__text white">I am available for freelance work. Contact with me via phone:</p>
                    <p className="hire__text white"><strong>+91 8826673650</strong> or email <strong>mohdhuzaif1020@gmail.com</strong></p>
                </div>
                <div className="input__box">
                    <input type="text" className='contact name' placeholder='Your name '/>
                    <input type="text" className='contact email' placeholder='Your Email '/>
                    <input type="text" className='contact subject' placeholder='Erite a Subject '/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Write your message'></textarea>
                    <button className="btn contact pointer" type='submit'>Submit</button>
                </div>

            </div>
        </div>
        <div className="col__2">
            <img src={contact__img} alt="" className="contact__img" />
        </div>
      </div>
      <section id="contact-details" className="section-p1 ">
  <div className="details">
    <div className='colred'>
      <li>
        <i className="fal fa-map" />
        <p>House No-A-41,Wazirabad Village,New Delhi</p>
      </li>
      <li>
        <i className="far fa-envelope" />
        <p>Mohdhuzaif1020@gmail.com</p>
      </li>
      <li>
        <i className="fas fa-phone-alt" />
        <p>8826673650</p>
      </li>
      

    </div>
  </div>

<div className="map">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6997.368106959828!2d77.22272519999999!3d28.72898669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1664698567346!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</div></section>
    </div>
  )
}

export default Contact
