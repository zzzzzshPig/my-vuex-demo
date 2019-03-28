<template>
  <div id="app">
    <header-component></header-component>
    {{count}}{{countUpdate}}
  </div>
</template>

<script>

import headerComponent from '@/components/header'

export default {
  name: 'app',

  components: {
    'header-component': headerComponent
  },

  computed: {
    count () {
      return this.$store.state.count
      // return this.$store.state.count
    },
    countUpdate () {
      return this.$store.getters.countUpdate
    }
  },

  mounted() {
    document.onclick = () => {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
</style>
