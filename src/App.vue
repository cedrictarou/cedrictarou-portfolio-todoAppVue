<template>
    <b-container class="mt-3">
        <app-header class="fixed-top shadow-sm header_area"></app-header>
        <app-new-todo class="mb-5"></app-new-todo>        
        <app-todo-grid class="mb-5"></app-todo-grid>
        <app-day-todos class="mb-5"></app-day-todos>
        <!-- <app-week-table class="mb-5"></app-week-table> -->
    </b-container>
</template>

<script>
  import TodoGrid from './components/TodoGrid.vue';
  import NewTodo from './components/NewTodo.vue';
  import Header from './components/Header.vue';
  import DayTodos from './components/DayTodos.vue';
  // import WeekTable from './components/WeekTable.vue';

  export default {
    components: {
      appTodoGrid: TodoGrid,
      appNewTodo: NewTodo,
      appHeader: Header,
      appDayTodos: DayTodos,
      // appWeekTable: WeekTable,
    },
  }
</script>
<style>
 body{ 
  padding-top: 10rem; 
}
.header_area {
  background-color: #fff;
  padding: 20px;
}
</style>
