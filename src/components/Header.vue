<template>
  <div>
    <div class="progress_area">
      <h3>See your progress</h3>
    </div>
    <b-progress height="2rem" :max="countItems" show-progress animated>
    <b-progress-bar :value="doneItems" :label="`${((doneItems / countItems) * 100).toFixed(0)}%`"></b-progress-bar>
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
      ...mapGetters(['allTasksArray', 'doneTasksArray']),
      countItems() {
        //全てのタスクの数
        return this.allTasksArray.length;
      },
      doneItems() {
        //全ての完了したタスクの数
        return this.doneTasksArray.length;
      }
    },
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
