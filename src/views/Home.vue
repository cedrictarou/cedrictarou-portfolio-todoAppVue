<template>
  <div class="home">
    <app-new-todo class="mb-5"></app-new-todo>
    <hr>        
    <app-todo-grid class="mb-5"></app-todo-grid>
  </div>
</template>

<script>
import TodoGrid from '../components/TodoGrid.vue';
import NewTodo from '../components/NewTodo.vue';

export default {
  components: {
    appTodoGrid: TodoGrid,
    appNewTodo: NewTodo,
  },
}
</script>