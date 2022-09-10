import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import FaqItem from '../FaqItem'
import Footer from '../Footer'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class About extends Component {
  state = {faqsList: [], activeTab: apiStatus.initial}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    this.setState({
      activeTab: apiStatus.in_progress,
    })
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    this.setState({
      faqsList: fetchedData.faq,
      activeTab: apiStatus.success,
    })
  }

  renderLoader = () => (
    <div className="loader-container" testid="aboutRouteLoader">
      <Loader type="TailSpin" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderFaqsList = () => {
    const {faqsList} = this.state
    return (
      <ul testid="faqsUnorderedList" className="faq-items-container">
        {faqsList.map(eachItem => (
          <FaqItem key={eachItem.qno} faqDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderSuccessTab = () => (
    <>
      <h1 className="about-heading">About</h1>
      <p className="about-update">Last update on march 28th 2021.</p>
      <p className="about-vaccines">
        COVID-19 vaccines be ready for distribution
      </p>
      {this.renderFaqsList()}
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
        <div className="about-section">
          <div className="about-container">{this.renderActiveTab()}</div>
        </div>
      </>
    )
  }
}

export default About
