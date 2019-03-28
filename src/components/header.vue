<template>
  <div class="header-component">
    {{count}}{{countUpdate}}
  </div>
</template>

<script>

export default {
  name: "headerComponent",

  computed: {
    count() {
      return this.$store.state.count
    },

    countUpdate() {
      return this.$store.getters.countUpdate
    }
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>
