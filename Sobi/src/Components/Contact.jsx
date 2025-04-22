import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact information below.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.62,10.79C8.36,12.12 10.9,13.03 13.66,12.55L15.04,14.94C16.25,16.18 16.8,17.88 16.8,19.75C16.8,21.84 15.2,23.43 13.11,23.43C11.49,23.43 10.12,21.99 10.12,19.97C10.12,17.62 12.19,16.11 14.15,16.11C14.33,16.11 14.51,16.12 14.68,16.16L13.85,15.34C11.39,13.99 8.43,13.78 5.86,13.72C4.43,13.7 3.03,12.95 2.08,11.98C1.13,11.01 0.61,10.21 0.57,8.9C0.56,8.84 0.56,8.78 0.56,8.72C0.56,6.34 2.77,4.44 5.24,4.44C6.48,4.44 7.7,4.98 8.81,5.78C9.41,6.17 10.1,6.76 10.72,7.4C11.54,8.45 12.5,9.31 13.61,10.01C14.77,10.7 15.8,10.98 16.57,10.65C16.7,10.57 16.83,10.5 16.96,10.43L16.25,9.81C14.53,8.36 12.59,7.26 10.41,7.56C8.45,7.82 6.61,8.54 5.21,9.8C4.34,10.51 3.75,11.36 3.39,12.38C3.15,13.02 3.1,13.7 3.27,14.37C3.35,14.56 3.43,14.75 3.52,14.93L6.62,10.79Z" fill="#ff6347"/>
            </svg>
            <div className="contact-details">
              <h2>Phone</h2>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M1,12A11,11 0 1,1 23,12A11,11 0 1,1 1,12ZM12,6A6,6 0 1,0 18,12A6,6 0 1,0 12,6ZM12,14A2,2 0 1,1 14,12A2,2 0 1,1 12,14Z" fill="#ff6347"/>
            </svg>
            <div className="contact-details">
              <h2>Email</h2>
              <p>support@foodiedelight.com</p>
            </div>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.528 0-10-4.472-10-10S6.472 2 12 2s10 4.472 10 10-4.472 10-10 10zm-1-17h2v5h-2V5zm0 7h2v5h-2v-5z" fill="#ff6347"/>
            </svg>
            <div className="contact-details">
              <h2>Address</h2>
              <p>123 Food Street, Flavor Town, USA</p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src="/assets/contact-image.jpg" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
