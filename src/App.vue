<template>
    <b-container class="mt-5">
        <app-header :todoCount="todos.length" :maxTodos="maxTodos"></app-header>
        <app-new-todo class="mt-2" @todoAdded="newTodo"></app-new-todo>        
        <app-todo-grid class="mt-2" :todos="todos" @todoDeleted="deletedTodo"></app-todo-grid>
    </b-container>
</template>

<script>
    import TodoGrid from './components/TodoGrid.vue';
    import NewTodo from './components/NewTodo.vue';
    import Header from './components/Header.vue';

    export default {
        data:function() {
            return {
                todos: [
                    'just a todo to see something'
                ],
                maxTodos: 10,
            }
        },
        methods: {
          newTodo(todo) {
            if(this.todos.length >= this.maxTodos) {
              return alert("Please delete todos frist");
            }
            this.todos.push(todo);
          },
          deletedTodo(index) {
            this.todos.splice(index, 1);
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
