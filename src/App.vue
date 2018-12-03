<template>
  <v-app dark>
      <v-container fluid  >
        <Head></Head>
        <Body></Body>
        <Footer></Footer>
      </v-container>
  </v-app>
</template>

<script>
import Head from './components/Head'
import Footer from './components/Footer'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
    Head,
    Footer,
    Body
  }
}
</script>

<style>
  ::-webkit-scrollbar {display:none}
</style>
