import {Component} from 'react'
import MySelect from '../MySelect'
import './index.css'

class StateDistrict extends Component {
  state = {districtsList: []}

  componentDidMount() {
    this.getDistricts()
  }

  getDistricts = async () => {
    const {stateCode} = this.props
    const {districtChange} = this.props
    districtChange(null)
    // const newCode = stateCode === null ? 2 : stateCode
    // console.log(newCode)
    const url = `https://apis.ccbp.in/covid19-districts-data/${stateCode}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.districts.map(state => ({
      districtId: state.district_id,
      districtName: state.district_name,
    }))
    this.setState({
      districtsList: updatedData,
    })
  }

  onChangeDistrict = value => {
    const {districtChange} = this.props
    districtChange(value)
  }

  render() {
    const {districtsList} = this.state
    const {district} = this.props
    const options = districtsList.map(state => ({
      value: state.districtId,
      label: state.districtName,
    }))
    return (
      <MySelect
        options={options}
        placeholder="Select District"
        onChange={this.onChangeDistrict}
        selected={district}
      />
    )
  }
}

export default StateDistrict
