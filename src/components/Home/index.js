import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import TableStateItem from '../TableStateItem'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'TT',
    state_name: 'TT',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const apiStatus = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {allStatesList: [], activeTab: apiStatus.in_progress}

  componentDidMount() {
    this.getAllStatesData()
  }

  convertObjectsIntoList = data => {
    const resultList = []
    const keyNames = Object.keys(data)

    keyNames.forEach(keyName => {
      if (data[keyName]) {
        const {total} = data[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0
        resultList.push({
          stateCode: keyName,
          name: statesList.find(state => state.state_code === keyName)
            .state_name,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  getAllStatesData = async () => {
    this.setState({
      activeTab: apiStatus.in_progress,
    })
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = this.convertObjectsIntoList(fetchedData)
    this.setState({
      allStatesList: updatedData,
      activeTab: apiStatus.success,
    })
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderTableHeader = () => (
    <div className="table-header">
      <div className="state-order-container">
        <p className="state-header-name">States/UT</p>
        <button type="button" className="sorting-button">
          <FcGenericSortingAsc className="sorting-icon" />
        </button>
        <button type="button" className="sorting-button">
          <FcGenericSortingDesc className="sorting-icon" />
        </button>
      </div>
      <p className="table-heading-text">Confirmed</p>
      <p className="table-heading-text">Active</p>
      <p className="table-heading-text">Recovered</p>
      <p className="table-heading-text">Deceased</p>
      <p className="table-heading-text">Population</p>
    </div>
  )

  renderAllStatesData = () => {
    const {allStatesList} = this.state
    return (
      <div className="home-table-container">
        <div className="all-states-table">
          {this.renderTableHeader()}
          <ul className="table-all-states-container">
            {allStatesList.map(state => (
              <TableStateItem key={state.stateCode} stateDetails={state} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderSearchBox = () => (
    <div className="search-box">
      <BsSearch className="search-icon" />
      <input
        type="search"
        placeholder="Enter the State"
        className="search-input"
      />
    </div>
  )

  renderAllSatesCount = () => {
    const {allStatesList} = this.state
    //  let confirmedCases = 0
    //  let activeCases = 0
    //  let recoveredCases = 0
    //  let deceasedCases = 0
    const totalConfirmedList = allStatesList.map(state => state.confirmed)
    const confirmedCases = totalConfirmedList.reduce((pre, next) => pre + next)
    const totalActiveCases = allStatesList.map(state => state.active)
    const activeCases = totalActiveCases.reduce((pre, next) => pre + next)
    const totalRecoveredCases = allStatesList.map(state => state.recovered)
    const recoveredCases = totalRecoveredCases.reduce((pre, next) => pre + next)
    const totalDeceasedCases = allStatesList.map(state => state.deceased)
    const deceasedCases = totalDeceasedCases.reduce((pre, next) => pre + next)

    return (
      <ul className="country-wide-container">
        <li className="country-wide-card">
          <p className="country-card-heading confirmed-card">Confirmed</p>
          <img
            src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/active-image_o47crj.png"
            alt="country wide confirmed cases pic"
            className="country-wide-card-images"
          />
          <p className="card-count confirmed-card">{confirmedCases}</p>
        </li>
        <li className="country-wide-card">
          <p className="country-card-heading active-card">Active</p>
          <img
            src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/protection_2_3x_m6bon4.png"
            alt="country wide active cases pic"
            className="country-wide-card-images"
          />
          <p className="card-count active-card">{activeCases}</p>
        </li>
        <li className="country-wide-card">
          <p className="country-card-heading recovered-card">Recovered</p>
          <img
            src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/recovered_1_3x_qixkz3.png"
            alt="country wide recovered cases pic"
            className="country-wide-card-images"
          />
          <p className="card-count recovered-card">{recoveredCases}</p>
        </li>
        <li className="country-wide-card">
          <p className="country-card-heading deceased-card">Deceased</p>
          <img
            src="https://res.cloudinary.com/sunil013/image/upload/v1662178362/deceased-image_rxgj4x.png"
            alt="country wide deceased cases pic"
            className="country-wide-card-images"
          />
          <p className="card-count deceased-card">{deceasedCases}</p>
        </li>
      </ul>
    )
  }

  renderSuccessTab = () => (
    <>
      {this.renderSearchBox()}
      {this.renderAllSatesCount()}
      {this.renderAllStatesData()}
      <Footer />
    </>
  )

  renderActiveTab = () => {
    const {activeTab} = this.state
    switch (activeTab) {
      case apiStatus.in_progress:
        return this.renderLoader()
      case apiStatus.success:
        return this.renderSuccessTab()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-route">
          <div className="home-body-container">{this.renderActiveTab()}</div>
        </div>
      </>
    )
  }
}

export default Home
