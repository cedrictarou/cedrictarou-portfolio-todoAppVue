<template>
<div>
  <h3>Tasks of each day</h3>
  <div class="row pt-2 pb-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Tasks of day</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in days" :key="day.id">
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
  // order: 1,
  components: {
    appWeekDayTodo: WeekDayTodo,
  },
  data() {
    return {
      days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    };
  },
  methods: {
    deleteTodo(index) {
      this.$store.state.allTodos.splice(index, 1);
    },
  }
};
</script>
<style>
.item {
  display: inline-block;
}
.done {
  text-decoration: line-through;
  color: #bbb;
}
</style>
