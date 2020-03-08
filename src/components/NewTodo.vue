<template>
  <div>
    <div>
      <h3>Just type what you have to do.</h3>
      <p>頭に思いつくままにタスクを入力しましょう。</p>
    </div>
    <b-form-input
      id="input1"
      v-model="todo"
      placeholder="Enter something to do..., and hit Enter!"
      @keypress="newTodo()"
    ></b-form-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: '',
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