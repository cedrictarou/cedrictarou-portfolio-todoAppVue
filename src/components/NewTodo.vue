<template>
  <div>
    <p>Just type what you have to do.</p>
    <b-form-input
      id="input1"
      v-model="todo"
      placeholder="Enter something to do..., and hit Enter!"
      @keyup.enter="newTodo()"
    ></b-form-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: ''
      }
    },
    methods: {
      newTodo() {
        const todo = {
          text: this.todo,
          isDone: false,
          day: 'none'
        };
        this.$store.state.allTodos.push(todo);
        this.todo = '';
      },
    }
  }
</script>