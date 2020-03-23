<template>
  <div>
    <slot :todos="mondayTodos"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mondayTodos: [
        {text: 'aaaaaa', isDone: false},
        {text: 'bbbbbb', isDone: false},
        {text: 'cccccc', isDone: false},
        {text: 'dddddd', isDone: false},
      ],
    }
  },
  methods: {
    toggleDone(todo) {
      todo.isDone = !todo.isDone
    }
  }
 }
</script>

<style>

</style>