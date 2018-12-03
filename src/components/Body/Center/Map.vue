<template>
  <div>
    <div id="mapContainer" style="width:100%; height:600px"></div>
  </div>
</template>

<script>
import option from '../../../api/map/map-option' // 引入配置项
import 'echarts/map/js/china.js'

export default {
  name: 'Map',
  data () {
    return {
    }
  },
  methods: {
    drawChinaMap () {
      let myChart = this.$echarts.init(document.getElementById('mapContainer'))
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChinaMap()
  }
}
</script>

<style scoped>

</style>
