import { FaLinkedin, FaEnvelope, FaBolt, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="footerdetails">
                <h4>VoltTechSolutions</h4>
                <p>25 Woodlands Drive.</p>
                <p>Sandford, Dorset.</p>
                <p>BH20 7QA</p>
                <p>07990685250</p>
            </div>
            <div className="footer-links">
                <a href="mailto:jdfban@gmail.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.github.com/ajammyfish" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:jdfban@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© Copyright 2023 - VoltTechSolutions <FaBolt style={{color: 'greenyellow'}} /></p>
        </div>
    </footer>
  )
}

export default Footer