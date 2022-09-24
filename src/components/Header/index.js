import {Component} from 'react'
import {Link} from 'react-router-dom'
import {CgPlayList} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'
import './index.css'

class Header extends Component {
  state = {showNavbar: false}
  //   const {onClickMenuIcon} = props
  //   const onClickIcon = () => {
  //     onClickMenuIcon()
  //   }

  onClickMenuIcon = () => {
    this.setState({
      showNavbar: true,
    })
  }

  onClickCloseIcon = () => {
    this.setState({
      showNavbar: false,
    })
  }

  render() {
    const {showNavbar} = this.state
    const pathName = window.location.pathname
    const homeClass = pathName === '/' ? 'menu-active' : ''
    const aboutClass = pathName === '/about' ? 'menu-active' : ''
    const vaccinationClass = pathName === '/vaccination' ? 'menu-active' : ''
    return (
      <nav className="navbar">
        <div className="navbar-content-container">
          <Link to="/" className="link-style">
            <h1 className="nav-heading">
              COVID19<span className="nav-heading-span">INDIA</span>
            </h1>
          </Link>
          <ul className="desktop-nav-container">
            <Link to="/" className="link-style">
              <li className={`desktop-nav-item ${homeClass}`}>Home</li>
            </Link>
            <Link to="/vaccination" className="link-style">
              <li className={`desktop-nav-item ${vaccinationClass}`}>
                Vaccination
              </li>
            </Link>
            <Link to="/about" className="link-style">
              <li className={`desktop-nav-item ${aboutClass}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="mobile-head-button"
            onClick={this.onClickMenuIcon}
          >
            <CgPlayList className="mobile-head-icon" />
          </button>
        </div>
        {showNavbar && (
          <div className="mobile-nav-show">
            <ul className="mobile-bar-list">
              <Link to="/" className="nav-tab-links">
                <li className={`mobile-bar-item ${homeClass}`}>Home</li>
              </Link>
              <Link to="/vaccination" className="nav-tab-links">
                <li className={`mobile-bar-item ${vaccinationClass}`}>
                  Vaccination
                </li>
              </Link>
              <Link to="/about" className="nav-tab-links">
                <li className={`mobile-bar-item ${aboutClass}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="close-button"
              onClick={this.onClickCloseIcon}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        )}
      </nav>
    )
  }
}

export default Header
