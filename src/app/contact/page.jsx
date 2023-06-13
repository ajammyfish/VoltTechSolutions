'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope, FaBolt } from 'react-icons/fa';
import Image from 'next/image';
import emailimg from '../../imgs/email.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://formspree.io/f/mayzryqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      toast.success('Form submitted!', { position: toast.POSITION.TOP_CENTER });

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Form submission error.', { position: toast.POSITION.TOP_CENTER });
    }
  };

  return (
    <div className="page">
      <h1 className="contact-heading">Get in touch!</h1>
      <div className="contact-top">
        <div className="contact-info">
          <p>
            <FaEnvelope className="contacticon" />
            vtsolutions@gmail.com
          </p>
          <p>
            <BsFillTelephoneFill className="contacticon" />
            07990685250
          </p>
        </div>
        <Image src={emailimg} />
      </div>

      <div className="contact-form">
        <form onSubmit={handleFormSubmit}>
          <div className="formdiv">
            <label>Name:</label>
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formdiv">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formdiv">
            <label>Phone Number:</label>
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="formdiv">
            <label>Your Message:</label>
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;