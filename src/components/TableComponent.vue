<template>
<div>
  <b-card-group deck>
    <draggable 
      v-model="allTasksArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1" v-for="(element, index) in allTasksArray"
      :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{dayIndex}} {{index +1}} {{element.text}}
            </span>
            <span @click="doDelete(dayIndex, index)"><b-icon icon="x"></b-icon></span>
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
  props:['dayIndex'],
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      },
    }
  },
  computed: {
    allTasksArray: {
      get() {
        return this.$store.getters.allTasksArray;
      },
      set(value) {
        this.$store.dispatch('updateAllTasksArray', value);
        }
    },
    // myList: {
    //   get() {
    //     return this.allTasksArray;
    //   },
    //   set(value) {
    //     this.allTasksArray = value;
    //   }
    // }
  },
  methods: {
    //動的にできるのは引数なので、配列で持たせて曜日指定するのが良い
    //これがいまいちよくわかっていない。
    doDelete(dayIndex, index) {
      console.log(dayIndex, index);
      // this.mondayTasksArray.splice(index, 1);
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