<template>
<div>
  <button @click="log()">button</button>
  <b-card-group deck>
    <draggable 
      v-model="mondayArray"
      @start="drag=true"
      @end="onEnd"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1" v-for="(element, index) in mondayArray"
      :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{index +1}} {{element.text}}
            </span>
            <span @click="doDeleteTodo(element.id)"><b-icon icon="x"></b-icon></span>
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group>
</div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      },
    }
  },
  computed: {
    newAllTasksArray() {
      return this.$store.getters.newAllTasksArray;
    },
    mondayArray: {
      get() {
        return this.$store.getters.mondayArray;
      },
      set(value) {
        this.$store.commit('updateMondayArray', value);
      }
    }
  },
  methods: {
    doDeleteTodo(taskId) {
      this.$store.commit('doDeleteTodo', taskId);
    },
    log() {
      console.log(this.newAllTasksArray);
    },
    onEnd() {
      console.log(this.mondayArray);
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
  opacity: 0.2;
}
</style>