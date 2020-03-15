<template>
  <b-card-group deck>
    <draggable 
      :list="reservedTasks"
      @start="drag=true"
      @end="drag=false"
      :options="options"
      @change="log"
      v-for="(reservedTask, index) in reservedTasks"
      :key="reservedTask.id">
      <b-card class="item mr-1 mt-1">
        <b-card-text>
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
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      }
    }
  },
  computed: {
    reservedTasks() {
      return this.$store.getters.reservedTasks;
    },
    allTasks() {
      return this.$store.getters.allTasks;
    },
    doneTasks() {
      return this.$store.getters.doneTasks;
    }
  },
  methods: {
    log() {
      console.log('allTasks', this.allTasks);
      console.log('doneTasks', this.doneTasks);
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