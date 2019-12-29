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
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [
              {
                label: 'Коммиты на GitHub',
                backgroundColor: '#8cf8a4',
                fill: false,
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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
          label: 'Доходность (%)',
          backgroundColor: '#8cf8a4',
          fill: false,
          data: this.chartData.U2815583['1Y'].cps.map(d => (d * 100).toFixed(2))
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>
