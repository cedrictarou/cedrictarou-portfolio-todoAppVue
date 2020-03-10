<template>
  <div>
    <div class="progress_area">
      <h3>See your progress</h3>
      <p>タスクを完了してチェックボックスを押すとプログレスバーが増えます。</p>
    </div>
    <b-progress height="2rem" :max="allTodos.length" show-progress animated>
    <b-progress-bar :value="remaining" :label="`${((remaining / allTodos.length) * 100).toFixed(0)}%`"></b-progress-bar>
   </b-progress>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
      allTodos() {
        return this.$store.state.allTodos
      },
      remaining() {
        return this.$store.getters.remaining;
      } 
    },
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
