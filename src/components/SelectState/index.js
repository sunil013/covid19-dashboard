import {Component} from 'react'
import MySelect from './MySelect'
import './index.css'

const options = [
  {
    value: '1',
    label: 'One',
  },
  {
    value: '2',
    label: 'Two',
  },
  {
    value: '3',
    label: 'Three',
  },
  {
    value: '4',
    label: 'Four',
  },
]

class SelectState extends Component {
  state

  componentDidMount() {
    this.getStatesData()
  }

  getStatesData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-ids'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
  }

  handleChange = value => {
    this.setState({
      selected: value,
    })
  }

  render() {
    return (
      <div className="select-state-box">
        <MySelect
          options={options}
          onChange={handleChange}
          selected={this.state.selected}
        />
      </div>
    )
  }
}

export default SelectState
