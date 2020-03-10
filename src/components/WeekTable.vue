<template>
<div class="mt-2">
  <h3 class="text-left">Tasks of each day</h3>
  <p>タスクを移動させて優先順位を決めましょう。左にくるほど重要です。</p>
  <div class="row pt-2 pb-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Tasks of day</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days" :key="day.id" @change="log">
          <th scope="row">{{ day }}</th>
          <td>
            <app-week-day-todo></app-week-day-todo>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import WeekDayTodo from "./WeekDayTodo.vue";
export default {
  components: {
    appWeekDayTodo: WeekDayTodo,
  },
  data() {
    return {
      days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    };
  },
  computed: {
    allTodos() {
      return this.$store.state.allTodos;
    },
  },
};
</script>
<style lang="scss" scoped>
span.done {
  text-decoration: line-through;
  color: #bbb;
}
</style>
