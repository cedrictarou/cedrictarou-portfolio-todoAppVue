<template>
  <div>
    <div>
      <h3>Just type what you have to do.</h3>
      <p>頭に思いつくままにタスクを入力しましょう。</p>
    </div>
    <b-form-input
      v-model="inputTask"
      placeholder="Enter something to do..., and hit Enter!"
      @keydown.enter="doMakeTodo()"
      @compositionstart="composing=true"
      @compositionend="composing=false"
    ></b-form-input>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        composing: false,
        inputTask: '',
      }
    },
  computed: {
    ...mapGetters(['allTasksArray']),
  } , 
    methods: {
      doMakeTodo() {
        if(this.composing) {
          return ;
        } 
        const todo = {
          id: this.allTasksArray.length,
          day: 'none',
          text: this.inputTask,
          isDone: false,
        };
        //mutationsで処理するように変更必要
        this.$store.commit('doAddTodo', todo);
        this.inputTask = '';
      },
    }
  }
</script>