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
      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td>
            <b-card-group deck>
              <draggable :list="mon" group="weekTasks" @start="drag=true" @end="drag=false">
                <b-card class="item" v-for="(monTask, index) in mon" :key="monTask.id">
                    <b-card-text>
                      <input type="checkbox" v-model="monTask.isDone">
                      <span :class="{done: monTask.isDone}">
                      {{ index +1 }} {{ monTask.text }}
                      </span>
                      <span @click="deleteTask(index)"><b-icon icon="x"></b-icon></span>
                    </b-card-text>
                </b-card>
              </draggable>
            </b-card-group>
          </td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>
            <b-card-group deck>
              <draggable :list="tue" group="weekTasks" @start="drag=true" @end="drag=false">
                <b-card class="item" v-for="(tueTask, index) in tue" :key="tueTask.id">
                  <b-card-text>
                    <input type="checkbox" v-model="tueTask.isDone">
                    <span :class="{done: tueTask.isDone}">
                    {{ index +1 }} {{ tueTask.text }}
                    </span>
                    <span @click="deleteTask(index)"><b-icon icon="x"></b-icon></span>
                  </b-card-text>
                </b-card>
              </draggable>
            </b-card-group>
          </td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>
            <b-card-group deck>
              <draggable :list="wed" group="weekTasks" @start="drag=true" @end="drag=false">
                <b-card class="item" v-for="(wedTask, index) in wed" :key="wedTask.id">
                  <b-card-text>
                    <input type="checkbox" v-model="wedTask.isDone">
                    <span :class="{done: wedTask.isDone}">
                    {{ index +1 }} {{ wedTask.text }}
                    </span>
                    <span @click="deleteTask(index)"><b-icon icon="x"></b-icon></span>
                  </b-card-text>
                </b-card>
              </draggable>
            </b-card-group>
          </td>
        </tr>
      </tbody>
    </table>
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
  computed: {
    ...mapGetters(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']),
  },
  methods: {
    deleteTask(index) {
      this.$store.commit('delteTask', index);
    },
  }
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
