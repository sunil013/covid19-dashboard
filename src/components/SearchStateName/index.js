import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const SearchStateName = props => {
  const {stateDetails} = props
  const stateCode = stateDetails.state_code
  const stateName = stateDetails.state_name
  return (
    <li className="search-state-item">
      <p className="search-state-name">{stateName}</p>
      <Link to={`/state/${stateCode}`} className="state-link">
        <button type="button" className="search-state-button">
          <p className="search-state-code">{stateCode}</p>
          <BiChevronRightSquare className="right-icon" />
        </button>
      </Link>
    </li>
  )
}

export default SearchStateName
