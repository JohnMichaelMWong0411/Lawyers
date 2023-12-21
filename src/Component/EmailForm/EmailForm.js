import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css'
const EmailForm = () => {
  const [name, setName] = useState('');
  const [senderEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      sender_email: senderEmail,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_hbx593e', // Replace with your service ID
        'template_28mb6ss', // Replace with your template ID
        templateParams,
        'tr6Ih2ha8iyYRmRue' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response);
          // Add any success message or actions you want here
        },
        (error) => {
          console.error('Error sending email:', error);
          // Handle errors or display error messages
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={senderEmail}
        onChange={(e) => setToEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
