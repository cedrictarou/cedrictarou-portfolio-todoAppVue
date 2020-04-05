<template>
<div>
  <b-row>
    <b-col sm=12 class="text-center mt-2">
      <b-card-group deck>
        <draggable 
          v-model="nonedayArray"
          @start="drag=true"
          @end="drag=false"
          group="weekTasks"
          :animation="200"
          >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <b-card 
              class="item mr-1 mt-1" 
              v-for="(element, index) in nonedayArray"
              :key="index">
              <b-card-text>
                {{ element.text }}
                <span @click="doDeleteTodo(index)">
                  <b-icon icon="x"></b-icon>
                </span>
              </b-card-text>
            </b-card> 
          </transition-group>
        </draggable>
      </b-card-group>
    </b-col>
  </b-row>
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
    nonedayArray: {
      get() {
      return this.$store.getters.nonedayArray;
    },
      set(value) {
        this.$store.commit('updateNonedayArray', value);
      }
    }
  },
  methods: {
    doDeleteTodo(index) {
      this.nonedayArray.splice(index, 1);
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
  color: #bbb;
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