<template>
<div class="mt-2">
  <h3 class="text-left">Tasks of each day</h3>
  <p>タスクを移動させて優先順位を決めましょう。左にくるほど重要です。</p>
  <div class="row pt-2 pb-2">
    <app-like-button></app-like-button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tasks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td>
            <app-todo day="mon"></app-todo>
          </td>
        </tr>
        <tr>
          <th scope="row">Tuesady</th>
          <td>
            <app-todo day="tue"></app-todo>
          </td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>
            <app-todo day="wed"></app-todo>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    
</div>
</template>
<script>
import { mapGetters } from 'vuex';
// import draggable from "vuedraggable";
import Todo from "./Todo.vue";
import LikeButton from "./LikeButton.vue";
export default {
  components: {
    // draggable,
    appTodo: Todo,
    appLikeButton: LikeButton,
  },
  computed: {
    ...mapGetters(['myArray','weekTasks', 'doneTasksArray']),
    allTasksArray: {
      get() {
        return this.$store.getters.allTasksArray;
      },
      set(value) {
        return this.$store.commit('updateAllTasksArray', value);
      }
    }
  },
  methods: {
    deleteTask(index, idx) {
      const deletedItems = this.weekTasks[index];
      this.$store.commit('deleteTask', [deletedItems, idx]);
    },
  },
};
</script>
<style lang="scss" scoped>
span.done {
  text-decoration: line-through;
  color: #bbb;
}
card-deck {
  min-height: 40px;
}
span.done {
  text-decoration: line-through;
  color: #bbb;
}
.card-body {
  padding: 0.5rem;
}
.item {
  display: inline-block;
  &:hover {
  cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
}
</style>
