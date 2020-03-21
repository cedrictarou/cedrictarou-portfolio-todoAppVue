<template>
  <b-card-group deck>
    <draggable 
      :list="reservedTasks"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
      <b-card class="item mr-1 mt-1" v-for="(reservedTask, index) in reservedTasks"
      :key="reservedTask.id">
        <b-card-text>
          {{ day }}
          {{ index +1 }} {{ reservedTask.text }}
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
  props: ['day'],
  data() {
    return {
      count: 0,
      options: {
        group: "weekTasks",
        animation: 200
      }
    }
  },
  computed: {
    reservedTasks: {
      get() {
        return this.$store.getters.reservedTasks;
        },
      set(value) {
        return this.$store.commit('updateReservedTask', value);
      }
    },
    allTasks() {
      return this.$store.getters.allTasks;
    },
    doneTasks() {
      return this.$store.getters.doneTasks;
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