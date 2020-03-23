<template>
<div>
  <div>
    <h3>Your Todo Lists</h3>
    <p>やるべきタスクをドラッグアンドドロップで曜日に振り分けましょう。</p>
  </div>
  <b-row>
    <b-col sm=12 class="text-center mt-2">
      <app-todo></app-todo>
    </b-col>
  </b-row>
</div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  components: {
    appTodo: Todo,
  },
};
</script>
