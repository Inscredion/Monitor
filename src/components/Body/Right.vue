<template>
  <v-flex xs3 order-md2 order-xs2>
       <ZYNews></ZYNews>
       <Air></Air>
      <Solid></Solid>
      <LightAndCO2></LightAndCO2>
  </v-flex>
</template>

<script>
import ZYNews from './Right/ZYNews'
import Air from './Right/Air'
import Solid from './Right/Solid'
import LightAndCO2 from './Right/LightAndCO2'

export default {
  name: 'Right',
  components: {
    ZYNews,
    Air,
    Solid,
    LightAndCO2
  }
}
</script>

<style scoped>

</style>
