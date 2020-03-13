<template>
  <b-card-group deck>
    <draggable 
      :task="allTodos"
      group="myTodos"
      @start="drag=true"
      @end="drag=false"
      :options="options"
      v-for="(todo, index) in allTodos"
      :key="todo.id">
      <b-card class="item mr-1 mt-1">
        <b-card-text>
          <input type="checkbox" v-model="todo.isDone">
            <span :class="{done: todo.isDone}">
            {{ index +1 }} {{ todo.text }}
            </span>
            <span @click="deleteTodo(idx, index)"><b-icon icon="x"></b-icon></span>
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
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
  computed: {
    dayTodos() {
      return this.$store.getters.dayTodos;
    },
    allTodos() {
      return this.$store.state.allTodos;
    }
  },
};
</script>

<style scoped>
.card-body {
  padding: 0.5rem;
}
.item {
  display: inline-block;
}
.item:hover {
  cursor: grab;
}
.item:active {
  cursor: grabbing;
}
.done {
  text-decoration: line-through;
  color: #bbb;
}
</style>