import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/not-found-image_iyuaiz.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-head">Page Not Found</h1>
      <p className="not-found-text">
        we’re sorry, the page you requested could not be found
        <br />
        Please go back to the homepage
      </p>
      <button type="button" className="not-found-button">
        Home
      </button>
    </div>
  </div>
)

export default NotFound
