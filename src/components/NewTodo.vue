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
      @keydown.enter="newTodo()"
      @compositionstart="composing=true"
      @compositionend="composing=false"
    ></b-form-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: '',
        composing: false,
      }
    },
    methods: {
      newTodo() {
        // 入力を終えて、エンターを押したら発火するように調整
        if(this.composing) {
          return ;
        } 
        const todo = {
          text: this.todo,
          isDone: false,
        };
        this.$store.state.allTodos.push(todo);
        this.todo = '';
      },
    }
  }
</script>