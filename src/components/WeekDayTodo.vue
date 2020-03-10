<template>
  <b-card-group deck>
    <draggable :list="dayTodos" group="myTodos"  @start="drag=true" @end="onEnd" :options="options" @change="log">
      <b-card class="item" v-for="(dayTodo, index) in dayTodos" :key="dayTodo.id">
        <b-card-text>
          <input type="checkbox" v-model="dayTodo.isDone">
          <span :class="{done: dayTodo.isDone}">
            {{ index +1 }} {{ dayTodo.text }}
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
      },
      dayTodos: []
    };
  },
  computed: {
    // 曜日に割り当てたtodoもallTodosで扱えるようにしたい。
    allTodos() {
      return this.$store.state.allTodos;
    },
    // dayTodos() {
    //   return this.$store.state.dayTodos;
    // },
    remaining() {
      return this.$store.getters.remaining;
    }
  },
  methods: {
    log: function(e) {
      window.console.log(e);
      console.log( "allTodos", this.allTodos);
      console.log( "dayTodos", this.dayTodos);
      console.log( "remaining", this.remaining);
    },
    deleteTodo(index) {
      this.dayTodos.splice(index, 1);
    },
    onEnd: function() {
      alert('Moved!!');
      this.dayTodos.push('aaaa');
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
  &:hover {
  cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
}
</style>
