<template>
  <v-layout row>
      <Left></Left>
      <Middle></Middle>
      <Right></Right>
  </v-layout>
</template>

<script>
import Left from './Body/Left'
import Middle from './Body/Middle'
import Right from './Body/Right'
export default {
  name: 'Body',
  components: {
    Left,
    Middle,
    Right
  }
}
</script>

<style scoped>

</style>
