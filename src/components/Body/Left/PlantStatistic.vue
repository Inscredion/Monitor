<template>
  <div id="PlantStatistic" :style="{width: '90%', height: '300px'}"></div>
</template>

<script>
export default {
  name: 'PlantStatistic',
  mounted () {
    this.drawLine()
  },
  data: function () {
    return {
      option: {
        tooltip: {
          // trigger: 'item',
          // formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          textStyle: {
            color: 'yellow'
          },
          x: 'center',
          text: '种植作物统计'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['番茄', '草莓', '蘑菇'],
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: '种植作物统计',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '番茄'},
              {value: 310, name: '草莓'},
              {value: 234, name: '蘑菇'}
            ]
          }
        ]
      }
    }
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('PlantStatistic'))
      myChart.setOption(this.option)
    }
  }
}

</script>

<style scoped>

</style>
