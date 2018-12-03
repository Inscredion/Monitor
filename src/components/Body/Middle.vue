<template>
  <v-flex xs6 order-md2 order-xs2>
      <Map></Map>
    <v-layout row>
      <Monitor></Monitor>
      <ThreeVisual></ThreeVisual>
    </v-layout>
  </v-flex>
</template>

<script>
import Map from './Center/Map'
import Monitor from './Center/Monitor'
import ThreeVisual from './Center/ThreeVisual'
export default {
  name: 'Middle',
  components: {
    Map,
    Monitor,
    ThreeVisual
  }
}
</script>

<style scoped>

</style>
