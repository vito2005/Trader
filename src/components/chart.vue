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
    chartData: Object,
    country: String
  },
  watch: {
    chartData: {
      handler: async function (val) {
        if (val && Object.keys(val).length) {
          this.render()
        }
      },
      deep: true
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render () {
      this.renderChart({
        labels: this.chartData.labels,
        datasets: [
          {
            label: 'Доходность ' + this.country + ' (%)',
            backgroundColor: '#8cf8a4',
            borderColor: '#000080',
            fill: false,
            data: this.chartData.data
          }
        ]
      }, { responsive: true, maintainAspectRatio: false })
    }
  }
}
</script>
