<template>
  <b-card-group deck>
    <draggable 
      :list="allTasksArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
      <b-card class="item mr-1 mt-1" v-for="(element, index) in allTasksArray"
      :key="element.id">
        <b-card-text>
         {{day}} {{index}} {{element.text}}
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group>
  
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: ['day'],
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      }
    }
  },
  computed: {
    allTasksArray() {
      return this.$store.getters.allTasksArray;
    },
    reservedTasks: {
      get() {
        return this.$store.getters.reservedTasks;
        },
      set(value) {
        return this.$store.commit('updateReservedTask', value);
      }
    },
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