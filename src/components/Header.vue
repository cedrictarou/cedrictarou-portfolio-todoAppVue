<template>
  <div>
    <div class="progress_area">
      <h3>See your progress</h3>
      <p>タスクを完了してチェックボックスを押すとプログレスバーが増えます。</p>
    </div>
    <b-progress height="2rem" :max="dayTodos.length" show-progress animated>
    <b-progress-bar :value="doneTodos.length" :label="`${((doneTodos.length / dayTodos.length) * 100).toFixed(0)}%`"></b-progress-bar>
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
      doneTodos() {
        return this.$store.getters.doneTodos;
      },
      dayTodos() {
        return this.$store.getters.dayTodos;
      }
    },
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
