<template>
<div>
  <b-card-group deck>
    <button @click="log">button</button>
    <draggable
      v-model="innerDayArray"
      >
      <div>dayArray:{{ dayArray.tasks }}</div>
      <div v-for="dayTask in dayArray.tasks" :key="dayTask.id">
        task:{{ dayTask.task }}
      </div>
    </draggable>
  </b-card-group>
  <!-- <b-card-group deck>
    <draggable 
      v-model="mondayArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1" v-for="(element, index) in mondayArray" :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{taskIndex(index)}} {{taskText(index)}}
            </span>
            <span @click="doDeleteTodo(index)"><b-icon icon="x"></b-icon></span>
        </b-card-text>
      </b-card> 
    </draggable>
  </b-card-group> -->
</div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: {
    dayArray: Array,
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
    innerDayArray: {
      get() {
      return this.dayArray.day;
    },
      set(value) {
        this.dayArray = value;
      }
    }
  },

  methods: {
    log() {
      console.log(this.innerDayArray);
    }
    // taskIndex(index) {
    //   return index + 1;
    // },
    // taskText(index) {
    //   return this.mondayArray[index].text;
    // },
    // doDeleteTodo(index) {
    //   this.mondayArray.splice(index, 1);
    // },
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