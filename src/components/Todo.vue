<template>
  <b-card-group deck>
    <draggable :list="allTodos" group="myTodos" @start="drag=true" @end="onEnd(index)" :options="options">
      <b-card class="item mr-1 mt-1" v-for="(todo, index) in allTodos" :key="todo.id">
        <b-card-text>
            {{ index +1 }} {{ todo.text }}
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
    onEnd(index) {
      console.log(this.allTodos[index]);
      // let todo = this.allTodos[index];
      // this.week[0].dayTodos.push(todo);
      // console.log(this.allTodos[0]);

    }
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