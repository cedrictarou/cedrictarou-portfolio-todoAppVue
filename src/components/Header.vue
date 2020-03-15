<template>
  <div>
    <div class="progress_area">
      <h3>See your progress</h3>
      <p>タスクを完了してチェックボックスを押すとプログレスバーが増えます。</p>
    </div>
    <b-progress height="2rem" :max="allTasks.length" show-progress animated>
    <b-progress-bar :value="doneTasks.length" :label="`${((doneTasks.length / allTasks.length) * 100).toFixed(0)}%`"></b-progress-bar>
   </b-progress>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
      ...mapGetters(['reservedTasks', 'doneTasks', 'allTasks']),
    },
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
