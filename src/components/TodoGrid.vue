<template>
  <div>
   <b-row>
     <app-todo v-for="(todo, index) in todos" :key="todo.id" @click.native="deleteTodo(index)">{{ todo }}</app-todo>
   </b-row>
  </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  props: ['todos'], // App.vueからtodosを受け取る
  components: {
    appTodo: Todo,
  },
  methods: {
    deleteTodo(index) {
      this.$emit('todoDeleted', index);
    }
  }
}
</script>