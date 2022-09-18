import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import StateWiseCases from '../StateWiseCases'
import StateBarChart from '../StateBarChart'
import StateTrendCharts from '../StateTrendCharts'
import StateDistrictsData from '../StateDistrictsData'
import StateImage from '../StateImage'
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
  //   {
  //     state_code: 'TT',
  //     state_name: 'TT',
  //   },
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

class StateWiseDetails extends Component {
  state = {
    activeTab: apiStatus.initial,
    stateCasesDetails: {},
    stateCode: '',
    activeCasesItem: 'CONFIRMED',
    statesDatesDetails: [],
    districtsList: [],
  }

  componentDidMount() {
    this.getStateDetails()
  }

  convertObjectsIntoList = data => {
    const resultList = []
    const keyNames = Object.keys(data)
    keyNames.forEach(keyName => {
      if (data[keyName]) {
        const {dates} = data[keyName]
        const distDates = Object.keys(dates)
        let totalConfirmed = 0
        let totalActive = 0
        let totalRecovered = 0
        let totalDeceased = 0
        distDates.forEach(date => {
          if (dates[date]) {
            const {total} = dates[date]
            const confirmed = total.confirmed ? total.confirmed : 0
            const active = total.active ? total.active : 0
            const recovered = total.recovered ? total.recovered : 0
            const deceased = total.deceased ? total.deceased : 0
            totalConfirmed += confirmed
            totalActive += active
            totalRecovered += recovered
            totalDeceased += deceased
          }
        })
        // const districtsData = distDates.map(date => {
        //   console.log(date)
        //   const finalConfirmed = date.total.confirmed ? date.total.confirmed : 0
        //   confirmed += finalConfirmed
        //   return confirmed
        // })
        resultList.push({
          name: keyName,
          confirmed: totalConfirmed,
          active: totalActive,
          recovered: totalRecovered,
          deceased: totalDeceased,
        })
      }
    })
    return resultList
  }

  getStateDetails = async () => {
    this.setState({
      activeTab: apiStatus.in_progress,
    })
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const url = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const urlCountry = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const countryResponse = await fetch(urlCountry, options)
    const stateResponse = await countryResponse.json()
    // console.log(stateResponse)
    // console.log(stateResponse[stateCode].districts)

    const {total, meta} = stateResponse[stateCode]
    const confirmed = total.confirmed ? total.confirmed : 0
    const deceased = total.deceased ? total.deceased : 0
    const recovered = total.recovered ? total.recovered : 0
    const tested = total.tested ? total.tested : 0
    const population = meta.population ? meta.population : 0
    const stateCaseDetails = {
      stateCode,
      name: statesList.find(state => state.state_code === stateCode).state_name,
      confirmed,
      deceased,
      recovered,
      tested,
      population,
      lastUpdated: meta.last_updated,
      active: confirmed - (deceased + recovered),
    }

    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const keyNames = Object.keys(fetchedData[stateCode].dates)

    const graphsData = keyNames.map(date => ({
      date,
      confirmed: fetchedData[stateCode].dates[date].total.confirmed,
      deceased: fetchedData[stateCode].dates[date].total.deceased,
      recovered: fetchedData[stateCode].dates[date].total.recovered,
      tested: fetchedData[stateCode].dates[date].total.tested,
      active:
        fetchedData[stateCode].dates[date].total.confirmed -
        (fetchedData[stateCode].dates[date].total.deceased +
          fetchedData[stateCode].dates[date].total.recovered),
    }))
    // console.log(fetchedData[stateCode].districts)
    const {districts} = fetchedData[stateCode]
    // const districtNames = Object.keys(fetchedData[stateCode].districts)
    const districtData = this.convertObjectsIntoList(districts)
    // const timeUrl = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    // const timeResponse = await fetch(timeUrl, options)
    // const timeLinesData = await timeResponse.json()
    // console.log(stateCaseDetails)
    this.setState({
      activeTab: apiStatus.success,
      stateCasesDetails: stateCaseDetails,
      statesDatesDetails: graphsData,
      stateCode,
      districtsList: districtData,
    })
  }

  onChangeCaseItem = id => {
    this.setState({
      activeCasesItem: id,
    })
  }

  renderLoader = () => (
    <div className="loader-container" testid="stateDetailsLoader">
      <Loader type="TailSpin" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderNameAndTested = () => {
    const {stateCasesDetails} = this.state
    const {name, tested, lastUpdated} = stateCasesDetails
    const latestDate = new Date(lastUpdated)
    const updatedDate = `${latestDate.toLocaleString('default', {
      month: 'long',
    })} ${latestDate.toLocaleString('default', {
      day: '2-digit',
    })} ${latestDate.toLocaleString('default', {year: 'numeric'})}`
    return (
      <>
        <div className="state-name-tested-container">
          <div className="state-name-container">
            <div className="state-name-box">
              <p className="state-name">{name}</p>
            </div>
            <p className="state-updated-date">Last update on {updatedDate}.</p>
          </div>
          <div className="state-tested-container">
            <p className="state-tested-name">Tested</p>
            <p className="state-tested-count">{tested}</p>
          </div>
        </div>
      </>
    )
  }

  //   renderDistrictsData = () => {
  //     const {districtsList, activeCasesItem} = this.state
  //     const activeName = activeCasesItem.toLowerCase()
  //     console.log(activeName)
  //     // districtsList.sort((a, b) => b.confirmed - a.confirmed)
  //     districtsList.sort((a, b) => b[activeName] - a[activeName])
  //     const updatedDistricts = districtsList.slice(0, 20)
  //     console.log(updatedDistricts)
  //     return (
  //       <div className="top-districts-container">
  //         <h1 className="district-heading">Top Districts</h1>
  //         <ul className="districts-list" testid="topDistrictsUnorderedList">
  //           {updatedDistricts.map(district => (
  //             <li className="district-item" key={district.name}>
  //               <p className="district-count">{district[activeName]}</p>
  //               <p className="district-name">{district.name}</p>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     )
  //   }

  renderSuccessTab = () => {
    const {
      stateCasesDetails,
      statesDatesDetails,
      activeCasesItem,
      stateCode,
      districtsList,
    } = this.state
    return (
      <>
        {this.renderNameAndTested()}
        <StateWiseCases
          stateCasesDetails={stateCasesDetails}
          activeCasesItem={activeCasesItem}
          onChangeCaseItem={this.onChangeCaseItem}
        />
        {/* {this.renderDistrictsData()} */}
        <StateImage stateDetails={stateCasesDetails} />
        <StateDistrictsData
          districtsList={districtsList}
          activeCasesItem={activeCasesItem}
        />
        <div className="bar-container">
          <StateBarChart
            statesDatesDetails={statesDatesDetails}
            activeCasesItem={activeCasesItem}
          />
        </div>
        <StateTrendCharts stateCode={stateCode} />
        {/* <ChartsData stateCode={stateCode} category={activeCasesItem} /> */}
        <Footer />
      </>
    )
  }

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
        <div className="state-wise-route">
          <div className="state-wise-body-container">
            {this.renderActiveTab()}
          </div>
        </div>
      </>
    )
  }
}

export default StateWiseDetails
