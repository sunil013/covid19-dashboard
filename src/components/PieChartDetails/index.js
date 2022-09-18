import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

// const data = [
//   {
//     count: 809680,
//     language: 'Telugu',
//   },
//   {
//     count: 4555697,
//     language: 'Hindi',
//   },
//   {
//     count: 12345657,
//     language: 'English',
//   },
// ]

const PieChartDetails = props => {
  const {data, colors} = props
  //   const colors = ['#86198F', '#5A8DEE', '#FF9800']
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart wrapperStyle={{marginBottom: '0px'}}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={180}
          endAngle={0}
          stroke="none"
          innerRadius="75%"
          outerRadius="100%"
          dataKey="count"
          wrapperStyle={{marginBottom: '0px'}}
        >
          {/* <Cell name="Male" fill="#ff0000" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Others" fill="#a44c9e" /> */}
          {data.map((entry, index) => (
            <Cell
              name={entry.text}
              fill={colors[index % colors.length]}
              key={entry.text}
            />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          iconSize={10}
          // margin={{top: 70, right: 20, left: 20, bottom: 20}}
          wrapperStyle={{marginTop: '30px'}}
          formatter={value => <span className="text-color-class">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartDetails
