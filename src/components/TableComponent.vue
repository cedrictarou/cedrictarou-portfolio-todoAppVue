<template>
<div>
  <b-card-group deck>
    <draggable 
      v-model="myList"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1" v-for="(element, index) in myList"
      :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{index +1}} {{element.text}}
            </span>
            <span @click="doDelete(index)"><b-icon icon="x"></b-icon></span>
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group>
</div>
</template>
<script>
import draggable from "vuedraggable";
// import Item from "./Item.vue";
export default {
  components: {
    draggable,
    // Item,
  },
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      },
      mondayTasksArray: [
        {text: 'aaaaaa', isDone: false},
        {text: 'bbbbbb', isDone: false},
        {text: 'cccccc', isDone: false},
        {text: 'dddddd', isDone: false},
      ],
    }
  },
  computed: {
    myList: {
      get() {
        return this.mondayTasksArray;
      },
      set(value) {
        this.mondayTasksArray = value;
      }
    }
  },
  methods: {
    doDelete(index) {
      this.mondayTasksArray.splice(index, 1);
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