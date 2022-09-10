import {XAxis, LabelList, BarChart, Bar} from 'recharts'
import './index.css'

const StateBarChart = props => {
  const {statesDatesDetails, activeCasesItem} = props
  const dataLength = statesDatesDetails.length
  const updatedArray = statesDatesDetails.slice(dataLength - 10, dataLength)
  const barColor = {
    confirmed: '#9A0E31',
    active: '#0A4FA0',
    recovered: '#216837',
    deceased: '#474C57',
  }
  const itemLower = activeCasesItem.toLocaleLowerCase()
  const dataFormatter = number => {
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
  //   const updatedDate = new Date()
  //   const finalDate = `${updatedDate.toLocaleString('default', {
  //     day: '2-digit',
  //   })} ${updatedDate.toLocaleString('default', {month: 'short'})}`
  //   console.log(
  //     updatedDate.toLocaleString('default', {day: '2-digit', month: 'short'}),
  //   )
  const dateConverter = date => {
    const updatedDate = new Date(date)
    const finalDate = `${updatedDate.toLocaleString('default', {
      day: '2-digit',
    })} ${updatedDate.toLocaleString('default', {month: 'short'})}`
    return finalDate
  }

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart data={updatedArray} width={1146} height={300}>
      <XAxis
        dataKey="date"
        axisLine={false}
        tickFormatter={dateConverter}
        tick={{
          //   stroke: '#6c757d',
          stroke: barColor[itemLower],
          strokeWidth: 1,
          fontSize: 15,
          fontFamily: 'Roboto',
        }}
        // tick={{stroke: 'red', strokeWidth: 2}}
      />
      {/* <YAxis tickFormatter={this.DataFormatter} /> */}
      {/* <Tooltip wrapperStyle={{width: 100, backgroundColor: '#ccc'}} /> */}
      <Bar
        dataKey={itemLower}
        fill={barColor[itemLower]}
        className="bar"
        radius={[8, 8, 0, 0]}
        // barSize={60}
        maxBarSize={60}
        barCategoryGap="30%"
        // label={{position: 'top', color: 'yellow'}}
      >
        <LabelList
          position="top"
          formatter={dataFormatter}
          fill={barColor[itemLower]}
          fontFamily="Roboto"
        />
      </Bar>
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default StateBarChart
