import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from 'recharts'
import './index.css'

const StateTrendCharts = props => {
  const {statesDatesDetails} = props
  const dataFormatter = number => {
    if (number > 1000) {
      return `${Math.ceil(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="trend-charts-container">
      <h1 className="trend-heading">Daily Spread Trends</h1>
      <div className="confirmed-trend trend-container">
        <p className="confirmed-text trend-text">Confirmed</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={statesDatesDetails}
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
              tickFormatter={dataFormatter}
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
        </ResponsiveContainer>
      </div>
      <div className="active-trend trend-container">
        <p className="active-text trend-text">Total Active</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={statesDatesDetails}
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
              tickFormatter={dataFormatter}
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
        </ResponsiveContainer>
      </div>
      <div className="recovered-trend trend-container">
        <p className="recovered-text trend-text">Recovered</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={statesDatesDetails}
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
              tickFormatter={dataFormatter}
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
        </ResponsiveContainer>
      </div>
      <div className="deceased-trend trend-container">
        <p className="deceased-text trend-text">Deceased</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={statesDatesDetails}
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
              tickFormatter={dataFormatter}
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
        </ResponsiveContainer>
      </div>
      <div className="tested-trend trend-container">
        <p className="tested-text trend-text">Tested</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={statesDatesDetails}
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
              tickFormatter={dataFormatter}
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
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StateTrendCharts
