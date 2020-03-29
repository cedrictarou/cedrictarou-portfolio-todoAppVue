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
  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
      allTasksArray() {
        return this.$store.getters.allTasksArray;
      },
      countItems() {
        //全てのタスクの数
        return this.allTasksArray.length;
      },
      doneItems() {
        //全ての完了したタスクの数
        const doneTodosArray = this.allTasksArray.filter( item => item.isDone);
        return doneTodosArray.length;
      }
    },
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
