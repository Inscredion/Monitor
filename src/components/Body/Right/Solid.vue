<template>
  <div id="Solid" style="height: 300px;width: 100%;margin-top: -18%"></div>
</template>

<script>
export default {
  name: 'Solid',
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
          text: '实时土壤墒情'
        },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '土壤温度',
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
            detail: {formatter: '{value}℃'},
            data: [{value: 50, name: '摄氏度'}]
          },
          {
            name: '土壤湿度',
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
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '湿度'}]
          }
        ]
      }
    }
  },
  methods: {
    drawPanel () {
      let myChart = this.$echarts.init(document.getElementById('Solid'))
      myChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
