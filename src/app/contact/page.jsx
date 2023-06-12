import { motion } from "framer-motion"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaBolt } from 'react-icons/fa'
import Image from "next/image"
import emailimg from '../../imgs/email.webp'

const ContactPage = () => {
  return (
    <div className="page">
        <h1 className="contact-heading">Get in touch!</h1>
        <div className="contact-top">
            <div className="contact-info">
                <p><FaEnvelope className="contacticon" />vtsolutions@gmail.com</p>
                <p><BsFillTelephoneFill  className="contacticon" />07990685250</p>
            </div>
            <Image src={emailimg} />
        </div>
        
        <div className="contact-form">
            <form
                action="https://formspree.io/f/mayzryqd"
                method="POST"
            >
                <div className="formdiv">
                    <label>
                        Name:
                    </label>
                    <input required name="name" />
                </div>
                <div className="formdiv">
                    <label required>
                        Email Address:
                    </label>
                    <input type="email" name="email" />
                </div>
                <div className="formdiv">
                    <label>
                        Phone Number:
                    </label>
                    <input name="phone" />
                </div>
                <div className="formdiv">
                    <label>
                        Your Message:
                    </label>
                    <textarea required name="message" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage