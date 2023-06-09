import React, { useState, useRef } from 'react';
import './Contact.css';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();
  
    const handleInputChange = (e) => {    
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
    
      e.preventDefault();
  
      if (!name && !email && !message) {
        setErrorMessage('Information is required to submit');
        return;
      }
      else  if (!email && !message) {
        setErrorMessage('Email address and message are required');
        return;
      }
      else  if (!name && !message) {
        setErrorMessage('Name and message are required');
      return;
      }
      else  if (!name && !email) {
        setErrorMessage('Name and email are required');
      return;
      } 
      else if (!email) {
        setErrorMessage('Email is required');
        return;
      }
      else if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email');       
        return;             
      } else if (!name) {
        setErrorMessage('Name is required');
        return;
      } else if (!message) {
        setErrorMessage('Message is required');
        return;
      };     

      emailjs.sendForm('service_tbayp0d', 'template_050tgea', form.current, 'F0PAgaailPPYZv99y')
      .then(
        (result) => {          
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Thank you for your message!',
            text: 'I look forward to speaking with you.',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );  
     
      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage('');
    };
  
    return (
      <div className="contact-container"> 
      <Navbar />
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <form ref={form} className="form">
          <label htmlFor="name">name:</label>
            <input className="contact-info"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            
          />
          <label htmlFor="email">email:</label>
          <input className="contact-info"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            
          />      
          <label htmlFor="message">message:</label>
          <textarea className="message"
         
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
           
          />
          <button className="contact-btn" type="button" onClick={handleFormSubmit} >Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="email-contact">You can also email me directly at <a className="email-address" href="mailto: sarahgrichens@gmail.com">sarahgrichens@gmail.com</a>. Thanks!</div>
      </div>
      <Footer />
      </div>
    );
  };

export default Contact;  