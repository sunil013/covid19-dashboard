import './index.css'

const StateDistrictsData = props => {
  const {districtsList, activeCasesItem} = props
  const activeName = activeCasesItem.toLowerCase()
  console.log(activeName)
  // districtsList.sort((a, b) => b.confirmed - a.confirmed)
  districtsList.sort((a, b) => b[activeName] - a[activeName])
  const updatedDistricts = districtsList.slice(0, 20)
  console.log(updatedDistricts)
  return (
    <div className="top-districts-container">
      <h1 className="district-heading">Top Districts</h1>
      <ul className="districts-list" testid="topDistrictsUnorderedList">
        {updatedDistricts.map(district => (
          <li className="district-item" key={district.name}>
            <p className="district-count">{district[activeName]}</p>
            <p className="district-name">{district.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StateDistrictsData
