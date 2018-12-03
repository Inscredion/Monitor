<template>
  <v-flex xs6 order-md2 order-xs2>
    <video id="myPlayer" class="video-js vjs-default-skin"   autoplay width="400" height="250">
      <source src="rtmp://rtmp.open.ys7.com/openlive/b4c91af1b64c443ba8e9c274c3915b5e.hd" type="" />
    </video>
  </v-flex>
</template>

<script>
import EZUIPlayer from 'ezuikit'
import videojs from 'video.js'
import 'videojs-contrib-hls'

export default {
  name: 'Monitor',
  mounted () {
    this.Camera()
  },
  methods: {
    Camera () {
      let player = new EZUIPlayer('myPlayer')
      player.on('error', function () {
        console.log('error')
      })
      player.on('play', function () {
        console.log('play')
      })
      player.on('pause', function () {
        console.log('pause')
      })
      videojs('myPlayer', {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: false,
        muted: true,
        controls: false,
        height: 250,
        loop: true
      }, function () {
        this.play()
      })
    }
  }
}
</script>

<style scoped>

</style>
