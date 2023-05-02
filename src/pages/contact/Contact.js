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
      } else if (!message) {
        setErrorMessage('Message is required');
      }
     
  
     
      setName('');
      setMessage('');
      setEmail('');
    };
  
    return (
      <div>
        <p>Contact</p>
        <form className="form">
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email Address"
          />      
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
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