import React, { useState } from 'react';
import './Contact.css';

import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
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
  
    
      if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email');
       
        return;
             
      } else if (!name) {
        setErrorMessage('Name is required');

        return;
      } else if (!message) {
        setErrorMessage('Message is required');
        return;
      }
     
  
     
      setName('');
      setMessage('');
      setEmail('');
      setErrorMessage('');
    };
  
    return (
      <div className="contact">
        <h2>Contact</h2>
        <form className="form">
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
          <button className="contact-btn" type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  };

export default Contact;  