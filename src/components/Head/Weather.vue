<template>
  <v-flex xs3 order-md3 order-xs3 >
      <v-layout row>
        <v-flex xs2 v-for="(item,index) in lists" :key="index">
          <v-card-text class="text-md-center green--text">
            <img :src="item.src" alt="">
            <span>{{item.value}}</span>
          </v-card-text>
        </v-flex>
      </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: 'Weather',
  data: () => ({
    lists: [
      {name: 'temp', src: require('../../assets/temp.png'), value: 30.5},
      {name: 'humidity', src: require('../../assets/humidity.png'), value: '60.6%'},
      {name: 'windDirect', src: require('../../assets/windDirect.png'), value: '20.4C'},
      {name: 'windSpeed', src: require('../../assets/windSpeed.png'), value: '30.5m/s'},
      {name: 'light', src: require('../../assets/light.png'), value: '1523lux'},
      {name: 'rain', src: require('../../assets/rain.png'), value: '40.5mm'},
      {name: 'uv', src: require('../../assets/uv.png'), value: '300'}
    ]
  })
}
</script>

<style scoped>
img{
  margin-left: -3px;
}
</style>
