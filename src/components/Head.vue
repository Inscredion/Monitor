<template>
  <!--<v-container fluid style="background-color: aqua">-->
    <v-layout row >
      <Time></Time>
      <Title></Title>
      <Weather></Weather>
    </v-layout>
  <!--</v-container>-->
</template>

<script>
import Time from './Head/Time'
import Title from './Head/Title'
import Weather from './Head/Weather'

export default {
  name: 'Head',
  components: {
    Weather,
    Time,
    Title
  }
}
</script>

<style scoped>

</style>
