<template>
<div>
    <h3>やることリスト</h3>
  <b-row>
    <draggable :list="todos" group="myTodos"  @start="drag=true" @end="drag=false" :options="options">
      <app-todo class="item mr-1 mt-1" v-for="(todo, index) in todos" :key="todo.id" @click.native="deleteTodo(index)">{{ todo }}</app-todo>
    </draggable>
  </b-row>
  <b-row>
    <b-col sm=12 class="text-center mt-2" >
      <b-alert show>Info: Drag to move your todos</b-alert>
      <app-week-table></app-week-table>
    </b-col>
  </b-row>
  <root></root>
</div>
</template>

<script>
import Todo from './Todo.vue'
import WeekTable from './WeekTable.vue';
import draggable from "vuedraggable";
export default {
  props: ['todos'], // App.vueからtodosを受け取る
  name: "allTodos",
  components: {
    appTodo: Todo,
    appWeekTable: WeekTable,
    draggable
  },
  data() {
    return {
      options: {
        group: "myTodos",
        animation: 200
      }
    }
  },
  methods: {
    deleteTodo(index){
      this.$emit('todoDeleted', index);
    }
  }
};
</script>
<style scoped>
.item {
  display: inline-block;
}
</style>