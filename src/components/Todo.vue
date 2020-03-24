<template>
  <b-card-group deck>
    <draggable 
      v-model="noneDayArray"
      @start="drag=true"
      @end="onEnd"
      group="weekTasks"
      >
      <b-card class="item mr-1 mt-1" v-for="(element, index) in noneDayArray"
      :key="element.id">
        <b-card-text>
          {{ index +1 }} {{ element.text }}
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
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      }
    }
  },
  computed: {
    newAllTasksArray() {
      return this.$store.getters.newAllTasksArray;
    },
    noneDayArray: {
      get() {
        return this.$store.getters.noneDayArray;
      },
      set(value) {
        this.$store.commit('updateNoneDayArray', value); 
      }
    }
  },
  methods: {
    onEnd() {
      console.log(this.newAllTasksArray);
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