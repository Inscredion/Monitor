<template>
  <v-flex xs3 order-md1 order-xs1>
    <PlantStatistic></PlantStatistic>
    <HistoryTemp></HistoryTemp>
    <HistoryHumidity></HistoryHumidity>
  </v-flex>
</template>

<script>
import HistoryTemp from './Left/HistoryTemp'
import PlantStatistic from './Left/PlantStatistic'
import HistoryHumidity from './Left/HistoryHumidity'
export default {
  name: 'Left',
  components: {
    HistoryTemp,
    PlantStatistic,
    HistoryHumidity
  }
}
</script>

<style scoped>

</style>
