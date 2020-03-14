<template>
  <b-card-group deck>
    <draggable 
      v-model="allTodos"
      group="myTodos"
      @start="drag=true"
      @end="dgra=false"
      @remove="removeItem(index)"
      :options="options"
      v-for="(todo, index) in allTodos"
      :key="todo.id">
      <b-card class="item mr-1 mt-1">
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
    dayTodos() {
      return this.$store.getters.dayTodos;
    },
    allTodos: {
      get() {
        return this.$store.state.allTodos;
      },
      set(value) {
        this.$store.commit('setDayTodos', value);
      }
    }
  },
  methods: {
    onEnd() {
      console.log('allTodos', this.allTodos);
      console.log('dayTodos', this.dayTodos);
    },
    removeItem(index) {
      let todoItem = this.allTodos[index];
      this.dayTodos.push(todoItem);
      this.allTodos.splice(index, 1);
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