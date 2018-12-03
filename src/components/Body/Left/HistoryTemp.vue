<template>
  <div id="myChart" :style="{width: '90%', height: '300px'}"></div>
</template>

<script>
export default {
  name: 'Statistic',
  mounted () {
    setInterval(this.drawLine, 4000)
  },
  data: function () {
    return {
      option: {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['空气温度', '土壤温度'],
          textStyle: {
            color: 'white'
          }
        },
        title: {
          textStyle: {
            color: 'yellow'
          },
          x: 'center',
          text: '上周平均温度'
        },
        tooltip: {},
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
          name: '空气温度',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30]
          // itemStyle: {
          //   normal: {
          //     color: '#57bad2'
          //   }
          // }
        },
        {
          name: '土壤温度',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30],
          itemStyle: {
            // normal: {
            //   color: '#red'
            // }
          }
        }]
      }
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.clear()
      myChart.setOption(this.option)
    }
  }
}

</script>

<style scoped>

</style>
