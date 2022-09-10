import './index.css'

const apiTab = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
}

const StateWiseCases = props => {
  const {stateCasesDetails, activeCasesItem, onChangeCaseItem} = props
  const {confirmed, deceased, recovered, active} = stateCasesDetails
  const confirmedClass =
    activeCasesItem === apiTab.confirmed ? 'confirmed-active' : ''
  const activeClass = activeCasesItem === apiTab.active ? 'active-active' : ''
  const recoveredClass =
    activeCasesItem === apiTab.recovered ? 'recovered-active' : ''
  const deceasedClass =
    activeCasesItem === apiTab.deceased ? 'deceased-active' : ''
  return (
    <ul className="state-wide-container">
      <li
        className={`state-wide-card ${confirmedClass}`}
        key="CONFIRMED"
        onClick={() => onChangeCaseItem(apiTab.confirmed)}
        testid="stateSpecificConfirmedCasesContainer"
      >
        <p className="state-card-heading state-confirmed-card">Confirmed</p>
        <img
          src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/active-image_o47crj.png"
          alt="state specific confirmed cases pic"
          className="state-wide-card-images"
        />
        <p className="state-card-count state-confirmed-card">{confirmed}</p>
      </li>
      <li
        className={`state-wide-card ${activeClass}`}
        key="ACTIVE"
        onClick={() => onChangeCaseItem(apiTab.active)}
        testid="stateSpecificActiveCasesContainer"
      >
        <p className="state-card-heading state-active-card">Active</p>
        <img
          src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/protection_2_3x_m6bon4.png"
          alt="state specific active cases pic"
          className="state-wide-card-images"
        />
        <p className="state-card-count state-active-card">{active}</p>
      </li>
      <li
        className={`state-wide-card ${recoveredClass}`}
        key="RECOVERED"
        onClick={() => onChangeCaseItem(apiTab.recovered)}
        testid="stateSpecificRecoveredCasesContainer"
      >
        <p className="state-card-heading state-recovered-card">Recovered</p>
        <img
          src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/recovered_1_3x_qixkz3.png"
          alt="state specific recovered cases pic"
          className="state-wide-card-images"
        />
        <p className="state-card-count state-recovered-card">{recovered}</p>
      </li>
      <li
        className={`state-wide-card ${deceasedClass}`}
        key="DECEASED"
        onClick={() => onChangeCaseItem(apiTab.deceased)}
        testid="stateSpecificDeceasedCasesContainer"
      >
        <p className="state-card-heading state-deceased-card">Deceased</p>
        <img
          src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/deceased-image_rxgj4x.png"
          alt="state specific deceased cases pic"
          className="state-wide-card-images"
        />
        <p className="state-card-count state-deceased-card">{deceased}</p>
      </li>
    </ul>
  )
}

export default StateWiseCases
