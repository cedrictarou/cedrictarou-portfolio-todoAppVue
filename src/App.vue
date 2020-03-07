<template>
    <b-container class="mt-5">
        <app-header></app-header>
        <app-new-todo class="mt-3"></app-new-todo>        
        <app-todo-grid class="mt-3"></app-todo-grid>
    </b-container>
</template>

<script>
  import TodoGrid from './components/TodoGrid.vue';
  import NewTodo from './components/NewTodo.vue';
  import Header from './components/Header.vue';

  export default {
      data:function() {
        return {
          maxTodos: 10,
        }
      },
      components: {
        appTodoGrid: TodoGrid,
        appNewTodo: NewTodo,
        appHeader: Header,
      }
  }
</script>
<style>
</style>
