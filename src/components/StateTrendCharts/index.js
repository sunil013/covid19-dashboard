import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
}

class StateTrendCharts extends Component {
  state = {statesDatesDetails: [], activeTab: apiConstants.initial}
  //   const {statesDatesDetails} = props

  componentDidMount() {
    this.getTimeLinesData()
  }

  getTimeLinesData = async () => {
    this.setState({
      activeTab: apiConstants.in_progress,
    })
    const {stateCode} = this.props
    // console.log(stateCode)
    const url = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const options = {
      method: 'GET',
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
    this.setState({
      statesDatesDetails: graphsData,
      activeTab: apiConstants.success,
    })
  }

  dataFormatter = number => {
    let result
    if (number > 100000) {
      result = `${Math.ceil(number / 100000).toString()}L`
    } else if (number > 1000) {
      result = `${Math.ceil(number / 1000).toString()}k`
    } else {
      result = number.toString()
    }
    return result
  }

  renderLoadingView = () => (
    <div
      className="products-details-loader-container"
      testid="timelinesDataLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessTab = () => {
    const {statesDatesDetails} = this.state

    return (
      <div className="trend-charts-container" testid="lineChartsContainer">
        <h1 className="trend-heading">Daily Spread Trends</h1>
        <div className="confirmed-trend trend-container">
          <p className="confirmed-text trend-text">Confirmed</p>
          {/* <ResponsiveContainer width="100%" height={280}> */}
          <LineChart
            data={statesDatesDetails}
            height={280}
            width={1070}
            // margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              tick={{stroke: '#FF073A', strokeWidth: 1, color: '#FF073A'}}
              tickMargin={10}
              tickCount={3}
              stroke="#FF073A"
            />
            <YAxis
              tickFormatter={this.dataFormatter}
              tick={{stroke: '#FF073A', strokeWidth: 1}}
              tickMargin={10}
              tickCount={5}
              tickSize={10}
              stroke="#FF073A"
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" height={36} textAnchor="end" /> */}
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke="#FF073A"
              fill="#FF073A"
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="active-trend trend-container">
          <p className="active-text trend-text">Total Active</p>
          {/* <ResponsiveContainer width="100%" height={280}> */}
          <LineChart
            data={statesDatesDetails}
            height={280}
            width={1070}
            // margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              tick={{stroke: '#007BFF', strokeWidth: 1, color: '#007BFF'}}
              tickMargin={10}
              tickCount={3}
              stroke="#007BFF"
            />
            <YAxis
              tickFormatter={this.dataFormatter}
              tick={{stroke: '#007BFF', strokeWidth: 1}}
              tickMargin={10}
              tickCount={5}
              tickSize={10}
              stroke="#007BFF"
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" height={36} textAnchor="end" /> */}
            <Line
              type="monotone"
              dataKey="active"
              stroke="#007BFF"
              fill="#007BFF"
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="recovered-trend trend-container">
          <p className="recovered-text trend-text">Recovered</p>
          {/* <ResponsiveContainer width="100%" height={280}> */}
          <LineChart
            data={statesDatesDetails}
            height={280}
            width={1070}
            // margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              tick={{stroke: '#27A243', strokeWidth: 1, color: '#27A243'}}
              tickMargin={10}
              tickCount={3}
              stroke="#27A243"
            />
            <YAxis
              tickFormatter={this.dataFormatter}
              tick={{stroke: '#27A243', strokeWidth: 1}}
              tickMargin={10}
              tickCount={5}
              tickSize={10}
              stroke="#27A243"
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" height={36} textAnchor="end" /> */}
            <Line
              type="monotone"
              dataKey="recovered"
              stroke="#27A243"
              fill="#27A243"
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="deceased-trend trend-container">
          <p className="deceased-text trend-text">Deceased</p>
          {/* <ResponsiveContainer width="100%" height={280}> */}
          <LineChart
            data={statesDatesDetails}
            height={280}
            width={1070}
            // margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              tick={{stroke: '#6C757D', strokeWidth: 1, color: '#6C757D'}}
              tickMargin={10}
              tickCount={3}
              stroke="#6C757D"
            />
            <YAxis
              tickFormatter={this.dataFormatter}
              tick={{stroke: '#6C757D', strokeWidth: 1}}
              tickMargin={10}
              tickCount={5}
              tickSize={10}
              stroke="#6C757D"
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" height={36} textAnchor="end" /> */}
            <Line
              type="monotone"
              dataKey="deceased"
              stroke="#6C757D"
              fill="#6C757D"
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="tested-trend trend-container">
          <p className="tested-text trend-text">Tested</p>
          {/* <ResponsiveContainer width="100%" height={280}> */}
          <LineChart
            data={statesDatesDetails}
            height={280}
            width={1070}
            // margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="date"
              tick={{stroke: '#9673B9', strokeWidth: 1, color: '#9673B9'}}
              tickMargin={10}
              tickCount={3}
              stroke="#9673B9"
            />
            <YAxis
              tickFormatter={this.dataFormatter}
              tick={{stroke: '#9673B9', strokeWidth: 1}}
              tickMargin={10}
              tickCount={5}
              tickSize={10}
              stroke="#9673B9"
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" height={36} textAnchor="end" /> */}
            <Line
              type="monotone"
              dataKey="tested"
              stroke="#9673B9"
              fill="#9673B9"
            />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    )
  }

  renderActiveTab = () => {
    const {activeTab} = this.state
    switch (activeTab) {
      case apiConstants.in_progress:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessTab()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderActiveTab()}</>
  }
}

export default StateTrendCharts
