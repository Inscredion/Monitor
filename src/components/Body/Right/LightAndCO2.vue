<template>
  <div id="LC" style="height: 300px;width: 100%;margin-top: -18%;margin-bottom: -18%"></div>
</template>

<script>
export default {
  name: 'LightAndCO2',
  mounted () {
    this.drawPanel()
  },
  data () {
    return {
      option: {
        title: {
          textStyle: {
            color: 'yellow'
          },
          x: 'center',
          text: '光照和二氧化碳'
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '光照',
            center: ['25%', '50%'],
            radius: '60%',
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 4
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 10,
              lineStyle: {
                color: 'auto'
              }
            },
            pointer: {
              width: 3
            },
            detail: {formatter: '{value}Lux'},
            data: [{value: 500, name: 'Lux'}]
          },
          {
            name: '二氧化碳',
            center: ['75%', '50%'],
            radius: '60%',
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 4
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 10,
              lineStyle: {
                color: 'auto'
              }
            },
            pointer: {
              width: 3
            },
            detail: {formatter: '{value}ppm'},
            data: [{value: 50, name: '浓度'}]
          }
        ]
      }
    }
  },
  methods: {
    drawPanel () {
      let myChart = this.$echarts.init(document.getElementById('LC'))
      myChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
