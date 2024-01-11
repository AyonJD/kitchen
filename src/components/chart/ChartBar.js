import { merge } from 'lodash'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import BaseOptionChart from './BaseOptionChart'

// ----------------------------------------------------------------------

const CHART_DATA = [
  { data: [100, 130, 248, 270, 340] },
]

export default function ChartBar() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%' },
    },
    xaxis: {
      categories: [
        'Sandwich',
        'Cheese Cake',
        'Chocolate Muffin',
        'Pasta',
        'Corn Soup'
      ],
    },
  })

  return (
    <ReactApexChart
      type="bar"
      series={CHART_DATA}
      options={chartOptions}
      height={320}
      width={400}
    />
  )
}
