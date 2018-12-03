<template>
  <v-flex xs3 order-md1 order-xs1>
      <v-card-text class="display-1 text-md-center green--text">
            <span id="clock">
            </span>
      </v-card-text>
  </v-flex>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Time',
  mounted () {
    this.showTime()
  },
  methods: {
    showTime () {
      setInterval(function () {
        moment.locale('zh-cn')
        document.getElementById('clock').innerText = moment().format('ll H:mm:ss')
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
