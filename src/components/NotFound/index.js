import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/not-found-image_iyuaiz.png"
        alt="not-found-pic"
        className="not-found-image"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found
        <br />
        Please go back to the homepage
      </p>
      <Link to="/" className="not-button-link">
        <button type="button" className="not-found-button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
