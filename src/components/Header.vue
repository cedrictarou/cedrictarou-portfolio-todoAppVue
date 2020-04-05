<template>
  <div>
    <div class="progress_area">
      <b-row>
        <b-col class="mb-2">
          <span>Your Progress</span>
          <b-button @click="purge" class="float-right" variant="outline-primary" size="sm">Purge!</b-button>
        </b-col>
      </b-row>
    </div>
    <b-progress height="2rem" :max="countItems" show-progress animated>
    <b-progress-bar :value="doneItems" :label="percentage"></b-progress-bar>
   </b-progress>
  </div>
</template>
<script>
  export default {
    computed: {
      percentage() {
        return `${((this.doneItems / this.countItems) * 100).toFixed(0)}%`;
      },
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
    methods: {
      purge() {
        if(!confirm('Delete all finished todos?')) {
          return;
        }
        this.$store.commit('purgeTasks');
      },
    }
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
