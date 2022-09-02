import {CgPlayList} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-content-container">
      <h1 className="nav-heading">
        COVID19<span className="nav-heading-span">INDIA</span>
      </h1>
      <ul className="desktop-nav-container">
        <li className="desktop-nav-item">Home</li>
        <li className="desktop-nav-item">About</li>
      </ul>
    </div>
  </nav>
)

export default Header
