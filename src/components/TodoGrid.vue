<template>
<div>
  <div>
    <h3>Your Todo Lists</h3>
    <p>やるべきタスクをドラッグアンドドロップで曜日に振り分けましょう。</p>
  </div>
  <b-row>
    <b-col sm=12 class="text-center mt-2">
      <b-card-group deck>
        <draggable 
          v-model="nonedayArray"
          @start="drag=true"
          @end="drag=false"
          group="weekTasks"
          >
          <b-card 
            class="item mr-1 mt-1" 
            v-for="(element, index) in nonedayArray"
            :key="element.id">
            <b-card-text>
              {{ index +1 }} {{ element.text }}
            </b-card-text>
          </b-card> 
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
        animation: 200
      }
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