import React from 'react'
import './contact.css'
//Icon import from "react-icon" lib
import {GrMail} from 'react-icons/gr'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
// Import EmailJS
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //Reset field of form
    e.target.reset()

    emailjs.sendForm('service_175uyhm', 'template_totzzep', form.current, '0SFZsqlAF3DAgAqfz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact"> 
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
              <GrMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>terrnit.megaman@gmail.com</h5>
              <a href="mailto:terrnit.megaman@gmail.com" target="_blank" rel="noopener noreferrer"> Send a Message</a>
          </article>

          <article className='contact__option'>
              <BiMessageRoundedDots className='contact__option-icon'/>
              <h4>Messager</h4>
              <h5>VK</h5>
              <a href="mailto:https://vk.com/princess_slayrr" target="_blank" rel="noopener noreferrer"> Send a Message</a>
          </article>

          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+123456789</h5>
              <a href="https://api.whatsapp.com/send?phone=+123456789" target="_blank" rel="noopener noreferrer"> Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-submit'>Send to <menu type="context"></menu></button>
        </form>
      </div>
    </section>
  )
}

export default Contact