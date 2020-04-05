<template>
  <div class="maneger">
    <app-todo-grid ></app-todo-grid>
    <app-week-table></app-week-table>
  </div>
</template>
<script>
import TodoGrid from '../components/TodoGrid.vue';
import WeekTable from '../components/WeekTable.vue';
export default {
  components: {
    appTodoGrid: TodoGrid,
    appWeekTable: WeekTable,
  },
}
</script>