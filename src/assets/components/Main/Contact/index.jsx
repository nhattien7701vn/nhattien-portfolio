import React from 'react'
import './index.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_agum6ka', 'template_5hrsgha', form.current, '9hPy8rJHpvwMJNj5K')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='section contact' id='contact'>
      <h1 className='sectionTitle'>Contact</h1>
      <p className='contact description'>This is my contact <br></br><strong>Thank you for seeing my portfolio</strong></p>

      <div className='contact-contactContainer'>
        <div className='contact-information'>
          <article className='contact-content'>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 24V9H24H4V24V39H24" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M44 34L30 34" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M39 29L44 34L39 39" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 9L24 24L44 9" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <h2>Email</h2>
            <span>nhattien7701vn@gmail.com</span>
            <a href="#contact">Send a message</a>
          </article>
          <article className='contact-content'>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.11111 46C2.94518 46 2 45.0496 2 43.8773V4.12274C2 2.95038 2.94518 2 4.11111 2H43.8889C45.0548 2 46 2.95038 46 4.12274V43.8773C46 45.0496 45.0548 46 43.8889 46C42.4815 46 29.2222 46 4.11111 46Z" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M38.6617 17.8869H34.3076H33.7932C32.4431 17.8869 31.3487 18.9814 31.3487 20.3314V25.2217H38.6617L37.5907 32.5525H31.3487V46H23.3067V32.5525H16.667V25.2217H23.2209L23.3067 18.2633L23.2828 15.7694C23.249 12.2477 26.0764 9.36542 29.5981 9.33159C29.6185 9.3314 29.6389 9.3313 29.6593 9.3313H38.6617V17.8869Z" fill="#00a1e0" /></svg>
            <h2>Facebook</h2>
            <span>Nhật Tiến</span>
            <a href="#contact">Send a message</a>
          </article>
          <article className='contact-content'>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3755 9.79423C15.1021 9.79423 15.7715 10.1883 16.1241 10.8235L18.5706 15.2303C18.8909 15.8073 18.9059 16.5052 18.6108 17.0955L16.254 21.8092C16.254 21.8092 16.937 25.3206 19.7954 28.179C22.6538 31.0374 26.1535 31.7086 26.1535 31.7086L30.8664 29.3522C31.4571 29.0568 32.1555 29.0721 32.7327 29.393L37.152 31.85C37.7866 32.2029 38.1802 32.8719 38.1802 33.598L38.1802 38.6715C38.1802 41.2552 35.7803 43.1213 33.3322 42.2952C28.3043 40.5987 20.4996 37.3685 15.5528 32.4216C10.6059 27.4748 7.3757 19.6701 5.67916 14.6422C4.85314 12.1941 6.71923 9.79423 9.30287 9.79423L14.3755 9.79423Z" fill="#00a1e0" stroke="#8d939d" stroke-width="4" stroke-linejoin="round" /><path d="M35 6L43 14L35 22" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M27 14.0083H43" stroke="#8d939d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <h2>Phone Number</h2>
            <span>0797509992</span>
            <a href="#contact">Send a message</a>
          </article>
        </div>
        <div className='contact-mailForm'>
          <form  ref={form} onSubmit={sendEmail}>
            <input placeholder='Your name' className='inputInfo' type="text" name='name' />
            <input placeholder='Your email' className='inputInfo' type="text" name='email' />
            <textarea placeholder='Your message' className='inputMessage' type="text" name='message' />
            <button type='submit' className='contact-btnSendMess'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
