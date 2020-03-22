<template>
<div>
  <b-card-group deck>
    <draggable 
      :list="mondayTasksArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
      <b-card class="item mr-1 mt-1" v-for="(element, index) in mondayTasksArray"
      :key="element.id">
        <b-card-text>
          <input type="checkbox">
            <span>
              {{index +1}} {{element.text}}
            </span>
            <span><b-icon icon="x"></b-icon></span>
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
      mondayTasksArray: [
        {text: 'aaaaaa', isDone: false},
        {text: 'bbbbbb', isDone: true},
        {text: 'cccccc', isDone: false},
        {text: 'dddddd', isDone: true},
      ],
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