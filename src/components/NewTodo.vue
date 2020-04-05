<template>
  <div>
    <div>
      <h3>Just type what you have to do.</h3>
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
  export default {
    data() {
      return {
        composing: false,
        inputTask: '',
      }
    },
  computed: {
    nonedayArray: {
      get() {
      return this.$store.getters.nonedayArray;
    },
      set(value) {
        this.$store.commit('updateNonedayArray', value);
      }
    }
  } , 
    methods: {
      doMakeTodo() {
        if(this.composing) {
          return ;
        } 
        const todo = {
          day: 'none',
          text: this.inputTask,
          isDone: false,
        };
        this.nonedayArray.push(todo);
        this.inputTask = '';
      },
    }
  }
</script>