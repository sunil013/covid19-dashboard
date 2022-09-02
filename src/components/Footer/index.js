import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-section">
    <h1 className="footer-heading">
      COVID19<span>INDIA</span>
    </h1>
    <p className="footer-text">
      we stand with everyone fighting on the front lines
    </p>
    <ul className="footer-icons-container">
      <li className="footer-icon-item">
        <VscGithubAlt className="footer-icon" />
      </li>
      <li className="footer-icon-item">
        <FiInstagram className="footer-icon" />
      </li>
      <li className="footer-icon-item">
        <FaTwitter className="footer-icon" />
      </li>
    </ul>
  </div>
)

export default Footer
