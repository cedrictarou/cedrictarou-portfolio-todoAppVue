<template>
  <b-card-group deck>
    <draggable :list="dayTodos" group="myTodos"  @start="drag=true" @end="drag=false" :options="options" @change="log">
      <b-card class="item" v-for="(dayTodo, index) in dayTodos" :key="dayTodo.id">
        <b-card-text>
          <input type="checkbox" v-model="dayTodo.isDone">
          <span :class="{done: dayTodo.isDone}"></span>
          {{ index +1 }} {{ dayTodo.text }}
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
      },
      dayTodos: [],
    };
  },
  computed: {
    // 曜日に割り当てたtodoもallTodosで扱えるようにしたい。
    allTodos() {
      return this.$store.state.allTodos.concat(this.dayTodos);
    }
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
      console.log( "allTodos", this.allTodos);
    },
    deleteTodo(index) {
      this.dayTodos.splice(index, 1);
    },
  }
};
</script>

<style lang="scss" scoped>
.card-deck {
  min-height: 40px;
}
span.done {
  text-decoration: line-through;
  color: #bbb;
}
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
</style>
