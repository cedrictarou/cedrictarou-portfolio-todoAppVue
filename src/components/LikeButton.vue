<template>
  <b-button @click="countUp">Like{{count}}</b-button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp() {
      this.count ++;
    }
  }
}
</script>

<style>

</style>