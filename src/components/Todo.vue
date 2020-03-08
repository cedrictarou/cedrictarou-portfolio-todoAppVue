<template>
  <b-card-group deck>
    <draggable :list="allTodos" group="myTodos"  @start="drag=true" @end="drag=false" :options="options" @change="log">
      <b-card class="item mr-1 mt-1" v-for="todo in allTodos" :key="todo.id">
        <b-card-text>
            {{ todo.text }}
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
    // log: function(evt) {
    //   window.console.log(evt);
    //   console.log(this.allTodos);
    // },
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