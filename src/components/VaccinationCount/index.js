import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import PieChartDetails from '../PieChartDetails'
import MultiLineChart from '../MultiLineChart'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class VaccinationCount extends Component {
  state = {detailsList: {}, activeTab: apiStatus.initial, activeChart: 'dose'}

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    this.setState({
      activeTab: apiStatus.in_progress,
    })
    const url = 'https://apis.ccbp.in/covid19-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = {
      topBlock: fetchedData.topBlock,
      vaccinationByAge: fetchedData.vaccinationByAge,
      vaccinationDoneByTime: fetchedData.vaccinationDoneByTime,
      vaccinationDoneByTimeAgeWise: fetchedData.vaccinationDoneByTimeAgeWise,
    }
    this.setState({
      detailsList: updatedData,
      activeTab: apiStatus.success,
    })
  }

  onChangeActiveChart = value => {
    this.setState({
      activeChart: value,
    })
  }

  renderLoader = () => (
    <div className="loader-container" testid="homeRouteLoader">
      <Loader type="TailSpin" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderVaccinationByAge = () => {
    const {detailsList} = this.state
    const {vaccinationByAge} = detailsList
    const colors = ['#A3DF9F', '#64C2A6', '#2D87BB']
    const ageData = [
      {
        count: vaccinationByAge.vac_18_45,
        text: '18-44',
      },
      {
        count: vaccinationByAge.vac_45_60,
        text: '45-60',
      },
      {
        count: vaccinationByAge.above_60,
        text: 'Above 60',
      },
    ]

    return (
      <div className="vaccination-age-container">
        <p className="vaccination-heading">Vaccination by Age</p>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={ageData}
              cx="50%"
              cy="50%"
              stroke="none"
              //   labelLine={true}
              outerRadius={150}
              fill="#8884d8"
              dataKey="count"
              wrapperStyle={{marginBottom: '0px'}}
            >
              {ageData.map((entry, index) => (
                <Cell
                  name={entry.text}
                  key={entry.text}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={10}
              // margin={{top: 70, right: 20, left: 20, bottom: 20}}
              //   wrapperStyle={{marginTop: '30px'}}
              formatter={value => (
                <span className="text-color-class">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

  renderVaccinationTrends = () => {
    const {detailsList, activeChart} = this.state
    const {vaccinationDoneByTime, vaccinationDoneByTimeAgeWise} = detailsList
    const doseOneData = vaccinationDoneByTime.map(item => item.dose_one)
    const doseTwoData = vaccinationDoneByTime.map(item => item.dose_two)
    const doseLabels = vaccinationDoneByTime.map(item => item.label.slice(6))
    const doseData = {
      labels: doseLabels,
      datasets: [
        {
          label: 'Dose1',
          data: doseOneData,
          fill: true,
          borderColor: '#742774',
          backgroundColor: '#fcb3fc',
          tension: 0.4,
        },
        {
          label: 'Dose2',
          data: doseTwoData,
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.4,
        },
      ],
    }
    const age18To44 = vaccinationDoneByTimeAgeWise.map(item => item.vac_18_45)
    const age45To60 = vaccinationDoneByTimeAgeWise.map(item => item.vac_45_60)
    const ageAbove60 = vaccinationDoneByTimeAgeWise.map(
      item => item.vac_60_above,
    )
    const ageLabels = vaccinationDoneByTimeAgeWise.map(item =>
      item.label.slice(6),
    )
    const ageData = {
      labels: ageLabels,
      datasets: [
        {
          label: 'AgeAbove60',
          data: ageAbove60,
          fill: true,
          borderColor: '#37C62B',
          backgroundColor: '#233323',
          tension: 0.4,
        },
        {
          label: 'Age45to60',
          data: age45To60,
          fill: true,
          borderColor: '#FCEA4E',
          backgroundColor: '#3E4226',
          tension: 0.4,
        },
        {
          label: 'Age18to44',
          data: age18To44,
          fill: true,
          backgroundColor: '#2E1E30',
          borderColor: '#A226DC',
          tension: 0.4,
        },
      ],
    }
    const doseClass = activeChart === 'dose' ? 'chart-active' : ''
    const ageClass = activeChart === 'age' ? 'chart-active' : ''
    const chartData = activeChart === 'dose' ? doseData : ageData
    return (
      <div className="vaccination-trend-container">
        <p className="vaccination-heading">Vaccination Trends</p>
        <ul className="chert-list-container">
          <li
            className={`chart-list-item ${doseClass}`}
            onClick={() => {
              this.onChangeActiveChart('dose')
            }}
          >
            By Doses
          </li>
          <li
            className={`chart-list-item ${ageClass}`}
            onClick={() => {
              this.onChangeActiveChart('age')
            }}
          >
            By Age
          </li>
        </ul>
        {/* <Line data={data} /> */}
        <MultiLineChart data={chartData} />
      </div>
    )
  }

  renderVaccinationCategory = () => {
    const {detailsList} = this.state
    const {vaccination} = detailsList.topBlock
    const genderList = [
      {
        count: vaccination.male,
        text: 'Male',
      },
      {
        count: vaccination.female,
        text: 'Female',
      },
      {
        count: vaccination.others,
        text: 'Others',
      },
    ]

    const genderColors = ['#F54394', '#5A8DEE', '#FF9800']

    const doseList = [
      {
        count: vaccination.covishield,
        text: 'Covishield',
      },
      {
        count: vaccination.covaxin,
        text: 'Covaxin',
      },
      {
        count: vaccination.sputnik,
        text: 'Sputnik',
      },
    ]

    const doseColors = ['#007CC3', '#7AC142', '#FF9800']

    return (
      <div className="vaccination-charts-container">
        <div className="pie-charts-container">
          <p className="vaccination-heading">Vaccination Category</p>
          <PieChartDetails data={genderList} colors={genderColors} />
          <PieChartDetails data={doseList} colors={doseColors} />
        </div>
        {this.renderVaccinationByAge()}
      </div>
    )
  }

  //   renderTopHomeName = () => (
  //     <div className="top-name-container">
  //       <AiFillHome className="top-home-image" />
  //       <h1 className="top-heading">India/Andhra Pradesh</h1>
  //     </div>
  //   )

  renderSitesDetails = () => {
    const {detailsList} = this.state
    const {sites, vaccination} = detailsList.topBlock
    return (
      <div className="sites-list-containers">
        <div className="sites-container-list">
          <div className="site-image-container">
            <img
              src="https://res.cloudinary.com/sunil013/image/upload/v1663313169/vaccines_1_3x_oq2qp1.png"
              alt="sample"
              className="site-images"
            />
          </div>
          <div className="sites-text-container">
            <p className="sites-heading">Site Conducting Vaccination</p>
            <p className="sites-count">{sites.total}</p>
            <div className="doses-container">
              <div className="dose-head-count">
                <p className="dose-head">Government</p>
                <p className="dose-count">{sites.govt}</p>
              </div>
              <div className="dose-head-count">
                <p className="dose-head">Private</p>
                <p className="dose-count">{sites.pvt}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sites-container-list">
          <div className="site-image-container">
            <img
              src="https://res.cloudinary.com/sunil013/image/upload/v1663313169/apartment_3x_hlc6t4.png"
              alt="sample"
              className="site-images"
            />
          </div>
          <div className="sites-text-container">
            <p className="sites-heading">Total Vaccination Doses</p>
            <p className="sites-count">{vaccination.total_doses}</p>
            <div className="doses-container">
              <div className="dose-head-count">
                <p className="dose-head">Dose1</p>
                <p className="dose-count">{vaccination.tot_dose_1}</p>
              </div>
              <div className="dose-head-count">
                <p className="dose-head">Dose2</p>
                <p className="dose-count">{vaccination.tot_dose_2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderSuccessTab = () => (
    <>
      {this.renderSitesDetails()}
      {this.renderVaccinationTrends()}
      {this.renderVaccinationCategory()}
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
    return <>{this.renderActiveTab()}</>
  }
}

export default VaccinationCount
