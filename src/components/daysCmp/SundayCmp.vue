<template>
<div>
  <b-card-group deck>
    <draggable 
      v-model="sundayArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      >
        <b-card class="item mr-1 mt-1" v-for="(element, index) in sundayArray" :key="element.id">
        <b-card-text>
          <input type="checkbox" v-model="element.isDone">
            <span :class="{done: element.isDone}">
              {{index +1}} {{element.text}}
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
  data() {
    return {
      options: {
        group: "weekTasks",
        animation: 200
      },
    }
  },
  computed: {
    sundayArray: {
      get() {
      return this.$store.getters.sundayArray;
    },
      set(value) {
        this.$store.commit('updateSundayArray', value);
      }
    }
  },

  methods: {
    doDeleteTodo(index) {
      this.sundayArray.splice(index, 1);
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