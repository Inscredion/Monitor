<template>
  <v-list two-line   id="news">
    <template v-for="(item, index) in items">
      <v-list-tile
        :key="item.title"
        avatar
        ripple
        @click="toggle(index)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
          <v-icon
            v-if="selected.indexOf(index) < 0"
            color="grey lighten-1"
          >
            ★
          </v-icon>

          <v-icon
            v-else
            color="yellow darken-2"
          >
            ★
          </v-icon>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider
        v-if="index + 1 < items.length"
        :key="index"
      ></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'ZYNews',
  data () {
    return {
      selected: [2],
      items: [
        {
          action: '15 min',
          headline: '张掖新闻办',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?'
        }
      ]
    }
  },

  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>

<style scoped>
  #news{
  margin-left: 10%;
}
</style>
