<template>
<div>
  <b-card-group deck>
    <draggable 
      v-model="innerDaysArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1"
          v-for="(element, index) in innerDaysArray" :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{taskIndex(index)}} {{taskText(index)}}
            </span>
            <span @click="doDeleteTodo(index)"><b-icon icon="x"></b-icon></span>
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
  props: ['daysArray'],
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      },
    }
  },
  computed: {
    innerDaysArray: {
      get() {
        return this.daysArray;
      },
      set(value) {
        this.$emit('change', value);
      }
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
    taskIndex(index) {
      return index + 1;
    },
    taskText(index) {
      return this.mondayArray[index].text;
    },
    doDeleteTodo(index) {
      this.mondayArray.splice(index, 1);
    },
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