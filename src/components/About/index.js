import {Component} from 'react'

import Header from '../Header'
import FaqItem from '../FaqItem'
import Footer from '../Footer'
import './index.css'

class About extends Component {
  state = {faqsList: []}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    this.setState({
      faqsList: fetchedData.faq,
    })
  }

  renderFaqsList = () => {
    const {faqsList} = this.state
    return (
      <ul className="faq-items-container">
        {faqsList.map(eachItem => (
          <FaqItem key={eachItem.qno} faqDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="about-section">
          <div className="about-container">
            <h1 className="about-heading">About</h1>
            <p className="about-update">Last update on march 28th 2021.</p>
            <p className="about-vaccines">
              COVID-19 vaccines be ready for distribution
            </p>
            {this.renderFaqsList()}
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default About
