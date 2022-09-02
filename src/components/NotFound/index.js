import './index.css'

const NotFound = () => (
  <div className="not-found-route">
    <div className="not-found-container">
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
