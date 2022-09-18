import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import Header from '../Header'
import Footer from '../Footer'
import VaccinationCount from '../VaccinationCount'
import StateDistrict from '../SelectDistrict'
import MySelect from '../MySelect'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Vaccination extends Component {
  state = {
    activeTab: apiStatus.initial,
    selected: null,
    stateOptionsList: [],
    district: null,
  }

  componentDidMount() {
    this.getStatesData()
  }

  getStatesData = async () => {
    this.setState({
      activeTab: apiStatus.in_progress,
    })
    const url = 'https://apis.ccbp.in/covid19-state-ids'
    // const newUrl = 'https://apis.ccbp.in/covid19-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.states.map(state => ({
      stateId: state.state_id,
      stateName: state.state_name,
    }))
    // const totalResponse = await fetch(newUrl, options)
    // const data = await totalResponse.json()
    // console.log(data)
    this.setState({
      stateOptionsList: updatedData,
      activeTab: apiStatus.success,
    })
  }

  handleChange = value => {
    this.setState(
      {
        selected: value,
      },
      this.getStatesData,
    )
  }

  districtChange = value => {
    this.setState({
      district: value,
    })
  }

  renderLoader = () => (
    <div className="vaccination-loader-container" testid="homeRouteLoader">
      <Loader type="TailSpin" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderSelectStateBox = () => {
    const {selected, stateOptionsList, district} = this.state
    const updatedCode = selected === null ? 2 : selected.value
    const options = stateOptionsList.map(state => ({
      value: state.stateId,
      label: state.stateName,
    }))
    return (
      <div className="select-container">
        <div className="select-state-box">
          <MySelect
            options={options}
            placeholder="Select State"
            onChange={this.handleChange}
            selected={selected}
          />
        </div>
        <StateDistrict
          districtChange={this.districtChange}
          district={district}
          stateCode={updatedCode}
        />
      </div>
    )
  }

  renderTopHomeName = () => (
    <div className="top-name-container">
      <AiFillHome className="top-home-image" />
      <h1 className="top-heading">India/Andhra Pradesh</h1>
    </div>
  )

  renderSuccessTab = () => (
    <>
      {this.renderTopHomeName()}
      {this.renderSelectStateBox()}
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
        <div className="vaccination-route">
          <div className="vaccination-body-container">
            {this.renderActiveTab()}
            {/* {this.renderTopHomeName()}
            {this.renderSelectStateBox()} */}
            {/* <StateDistrict
              districtChange={this.districtChange}
              district={district}
            /> */}
            <VaccinationCount />
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Vaccination
