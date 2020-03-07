<template>
<div>
    <span>Your Todo Lists</span>
    <b-button class="ml-2 btn-purge" size="sm" variant="outline-primary"
    @click="purge">Purge</b-button>
  <b-row>
    <b-col sm=12 class="text-center mt-2">
      <app-todo></app-todo>
    </b-col>
  </b-row>
  <b-alert v-show="allTodos.length" show class="mt-3">Info: Drag to move your todos</b-alert>
  <b-row>
    <b-col sm=12 class="text-center mt-2">
      <app-week-table></app-week-table>
    </b-col>
  </b-row>
</div>
</template>

<script>
import Todo from './Todo.vue'
import WeekTable from './WeekTable.vue';
export default {
  components: {
    appTodo: Todo,
    appWeekTable: WeekTable,
  },
  data() {
    return {
      options: {
        group: "myTodos",
        animation: 200
      }
    }
  },
  computed: {
    allTodos() {
      return this.$store.state.allTodos;
    },
    remaining() {
      return this.allTodos.filter(function(todo) {
        return !todo.isDone;
      });
    } 
  },
  methods: {
    purge() {
      if(!confirm('Delete finied items?')) {
        return;
      } 
      this.$store.state.allTodos = this.remaining;
    },
    
  }
};
</script>
<style scoped>
.btn-purge {
  float: right;
}
</style>