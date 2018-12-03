
<template>
  <div id="HistoryHumidity" :style="{width: '90%', height: '300px'}"></div>
</template>

<script>
export default {
  name: 'HistoryHumidity',
  mounted () {
    setInterval(this.drawLine, 4000)
  },
  data: function () {
    return {
      option: {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['空气湿度', '土壤湿度'],
          textStyle: {
            color: 'white'
          }
        },
        title: {
          textStyle: {
            color: 'yellow'
          },
          x: 'center',
          text: '上周平均湿度'
        },
        xAxis: {
          axisLabel: {
            textStyle: {
              color: 'orange'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ['一', '二', '三', '四', '五', '六', '日']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: 'orange'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '空气湿度',
          data: [0, 45, 34, 24, 23, 23, 27],
          type: 'line',
          smooth: true,
          symbol: null,
          lineStyle: {
            normal: {
              width: 4
            }
          }
        },
        {
          name: '土壤湿度',
          data: [],
          type: 'line',
          smooth: true
        }]
      }
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('HistoryHumidity'))
      myChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
