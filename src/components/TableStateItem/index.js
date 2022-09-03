import './index.css'

const TableStateItem = props => {
  const {stateDetails} = props
  const {
    stateCode,
    name,
    confirmed,
    deceased,
    recovered,
    population,
    active,
  } = stateDetails
  return (
    <li className="each-state-item">
      <p className="each-state-name">{name}</p>
      <p className="state-item-counts confirmed-count">{confirmed}</p>
      <p className="state-item-counts active-count">{active}</p>
      <p className="state-item-counts recovered-count">{recovered}</p>
      <p className="state-item-counts deceased-count">{deceased}</p>
      <p className="state-item-counts population-count">{population}</p>
    </li>
  )
}

export default TableStateItem
