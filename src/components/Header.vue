<template>
  <div>
    <div class="progress_area">
      <h3>See your progress</h3>
      <p>タスクを完了してチェックボックスを押すとプログレスバーが増えます。</p>
      <p>タスクの数{{ countItems }}</p>
      <p>完了したタスクの数{{ doneItems }}</p>
      <b-button @click="change()">button</b-button>
    </div>
    <p>{{ allTasks }}</p>
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
      ...mapGetters(['allTasks', 'doneTasks']),
      countItems() {
        //全てのタスクの数を計算する
        let currentSum = 0;
        for(let i = 0; i < this.allTasks.length; i ++) {
          let items;
          items = this.allTasks[i].length;
          currentSum += items;
        }
        return currentSum;
      },
      doneItems() {
        //全ての完了したタスクの数を計算する
        let currentSum = 0;
        for(let i = 0; i < this.doneTasks.length; i ++) {
          let items;
          items = this.doneTasks[i].length;
          currentSum += items;
        }
        return currentSum;
      }
    },
    methods: {
      change() {
        console.log('doneItems', this.doneItems);
        console.log('doneTasks', this.doneTasks);
        const item = {
          text: 'aaaaaaaaaaaa',
          isDone: true
        };
        this.doneTasks.push(item);
      }
    }
  }
</script>
<style lang="scss" scoped>
.progress_area {
  background-color: #fff;
}
</style>
