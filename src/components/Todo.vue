<template>
  <b-card-group deck>
    <draggable 
      :list="noneDayTasksArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
      <b-card class="item mr-1 mt-1" v-for="(element, index) in noneDayTasksArray"
      :key="element.id">
        <b-card-text>
          {{ index +1 }} {{ element.text }}
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group>
  
</template>

<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(['allTasksArray']),
    noneDayTasksArray() {
      const noneItems = this.allTasksArray.filter( item => item.day === 'none');
      return noneItems;
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