<template>
  <div>
    <canvas ref="canvas">
    </canvas>
  </div>
</template>

<script>
import { Line } from './lib/BaseCharts'

export default {
  extends: Line,
  props: {
    chartData: Object
  },
  watch: {
    chartData: {
      handler: async function (val) {
        if (val && Object.keys(val).length) {
          this.renderChart({
            labels: this.chartData.U2815583['1Y'].dates.map(d => parse(d)),
            datasets: [
              {
                label: 'Доходность США (%)',
                backgroundColor: '#8cf8a4',
                fill: false,
                data: this.chartData.U2815583['1Y'].cps.map(d => (d * 100).toFixed(2))
              }
            ]
          }, { responsive: true, maintainAspectRatio: false })
        }
      },
      deep: true
    }
  },
  mounted () {
    window.chart = this
    function parse (str) {
      const y = str.substr(0, 4)
      const m = str.substr(4, 2)
      const d = str.substr(6, 2)
      return d + '.' + m + '.' + y
    }
    this.renderChart({
      labels: this.chartData.U2815583['1Y'].dates.map(d => parse(d)),
      datasets: [
        {
          label: 'Доходность США (%)',
          backgroundColor: '#8cf8a4',
          fill: false,
          data: this.chartData.U2815583['1Y'].cps.map(d => (d * 100).toFixed(2))
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>
