<template>
<div>
  <b-card-group deck>
    <draggable 
      v-model="saturdayArray"
      @start="drag=true"
      @end="drag=false"
      group="weekTasks"
      :animation="200"
      >
        <transition-group mode="out-in"
          type="transition" 
          :name="!drag ? 'flip-list' : null">
          <b-card class="item mr-1 mt-1"
            v-for="(element, index) in saturdayArray" 
            :key="index">
            <b-card-text>
              <input type="checkbox" 
                v-model="element.isDone">
                <span :class="{done: element.isDone}">
                  {{taskIndex(index)}} {{taskText(index)}}
                </span>
                <span @click="doDeleteTodo(index)">
                  <b-icon icon="x"></b-icon>
                </span>
            </b-card-text>
          </b-card> 
        </transition-group>
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
      },
      drag: false
    }
  },
  computed: {
    saturdayArray: {
      get() {
      return this.$store.getters.saturdayArray;
    },
      set(value) {
        this.$store.commit('updateSaturdayArray', value);
      }
    }
  },

  methods: {
    taskIndex(index) {
      return index + 1;
    },
    taskText(index) {
      return this.saturdayArray[index].text;
    },
    doDeleteTodo(index) {
      this.saturdayArray.splice(index, 1);
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
/* アニメーション */
/* 1秒かけて透明度を遷移 */
.flip-enter-active, .flip-leave-active {
  transition: opacity 1s;
}
/* 見えなくなるときの透明度 */
.flip-enter, .flip-leave-to {
  opacity: 0;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
</style>