<template>
<div class="mt-2">
  <h3 class="text-left">Tasks of each day</h3>
  <p>タスクを移動させて優先順位を決めましょう。左にくるほど重要です。</p>
  <div class="row pt-2 pb-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Tasks of each day</th>
        </tr>
      </thead>
      <tbody >
        <tr scope="row" v-for="(dayTasks, index) in weekTasks" :key="dayTasks.id">
          <th >{{ index }}</th>
          <td>
            <b-card-group deck>
              <draggable :list="weekTasks" group="weekTasks" @start="drag=true" @end="drag=false">
                <b-card class="item" v-for="(dayTask, idx) in dayTasks" :key="dayTask.id">
                    <b-card-text>
                      <input type="checkbox" v-model="dayTask.isDone">
                      <span :class="{done: dayTask.isDone}">
                        {{ idx +1 }} {{ dayTask.text }}
                      </span>
                      <span @click="deleteTask(index, idx)"><b-icon icon="x"></b-icon></span>
                    </b-card-text>
                </b-card>
              </draggable>
            </b-card-group>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <p>サンプル</p>
      <draggable :list="myArray" group="weekTasks" @start="drag=true" @end="drag=false">
        <div v-for="element in myArray" :key="element.id">{{element}}</div>
      </draggable>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      myArray: ['aaaa', 'bbbb', 'cccc'],
    }
  },
  computed: {
    ...mapGetters(['weekTasks', 'doneTasksArray']),
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
