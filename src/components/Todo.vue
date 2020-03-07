<template>
  <b-card-group deck>
    <draggable :list="allTodos" group="myTodos"  @start="drag=true" @end="drag=false" :options="options" @change="log">
      <b-card class="item mr-1 mt-1" v-for="(todo, index) in allTodos" :key="todo.id">
        <b-card-text>
          <input type="checkbox" v-model="todo.isDone">
          <span :class="{done: todo.isDone}">
            {{ todo.text }}
          </span>
          <span @click="deleteTodo(index)"><b-icon icon="x"></b-icon></span>
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
    allTodos() {
      return this.$store.state.allTodos;
    }
  },
  methods: {
    deleteTodo(index) {
      this.$store.state.allTodos.splice(index, 1);
    },
    log: function(evt) {
      window.console.log(evt);
      console.log(this.allTodos);
    },
  }
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