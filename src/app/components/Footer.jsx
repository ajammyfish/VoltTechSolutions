import { FaLinkedin, FaEnvelope, FaBolt, FaGithub } from 'react-icons/fa'
import {BsTsunami} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="footerdetails">
                <h4>SouthWestSolutions</h4>
                <p>25 Woodlands Drive.</p>
                <p>Sandford, Dorset.</p>
                <p>BH20 7QA</p>
                <p>07990685250</p>
            </div>
            <div className="footer-links">
                <a href="mailto:volttechnologysolutions@gmail.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:volttechnologysolutions@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© Copyright 2023 - SouthWestSolutions <BsTsunami style={{color: 'rgb(56, 158, 248)'}} /></p>
        </div>
    </footer>
  )
}

export default Footer