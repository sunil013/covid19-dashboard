import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //   Title,
  Tooltip,
  //   Legend,
  Filler,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
// import faker from 'faker'
import './index.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  //   Title,
  Tooltip,
  //   Legend,
)

// const dataFormatter = number => {
//   let result
//   if (number > 100000) {
//     result = `${Math.ceil(number / 100000).toString()}L`
//   } else if (number > 1000) {
//     result = `${Math.ceil(number / 1000).toString()}k`
//   } else {
//     result = number.toString()
//   }
//   return result
// }

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        borderColor: '#6c7570',
        tickColor: '#6c7570',
        lineWidth: 0,
      },
      ticks: {
        //   color: '#6C757D',
        //   beginAtZero: true,
        font: {
          size: 15,
        },
      },
    },
    y: {
      grid: {
        borderColor: '#6c7570',
        tickColor: '#6c7570',
        lineWidth: 0,
      },
      ticks: {
        font: {
          size: 15,
        },
        callback: value => {
          //   return Number((value / 1000).toString()) + 'K'
          let result
          if (value > 100000) {
            result = `${Math.ceil(value / 100000).toString()}L`
          } else if (value >= 1000) {
            result = `${Math.ceil(value / 1000).toString()}k`
          } else {
            result = value.toString()
          }
          return result
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       label: 'Male',
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: 'rgba(75,192,192,0.2)',
//       borderColor: 'rgba(75,192,192,1)',
//       tension: 0.4,
//     },
//     {
//       label: 'Female',
//       data: [33, 25, 35, 51, 54, 76],
//       fill: true,
//       borderColor: '#742774',
//       backgroundColor: '#fcb3fc',
//       tension: 0.4,
//     },
//   ],
// }
const MultiLineChart = props => {
  const {data} = props
  return (
    <div className="line-chart">
      <Line options={options} data={data} />
    </div>
  )
}

export default MultiLineChart
