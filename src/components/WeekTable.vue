<template>
<div class="mt-2">
  <h3 class="text-left">Tasks of each day</h3>
  <p>タスクを移動させて優先順位を決めましょう。左にくるほど重要です。</p>
  <div class="row pt-2 pb-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Tasks of day</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, idx) in week" :key="day.id">
          <th scope="row">{{ day.dayNum }}</th>
          <td>
            <b-card-group deck>
              <draggable :task="week" group="myTodos" @start="drag=true" @end="drag=false" :options="options">
                <b-card class="item" v-for="(dayTodo, index) in day.dayTodos" :key="dayTodo.id">
                    <b-card-text>
                      <input type="checkbox" v-model="dayTodo.isDone">
                      <span :class="{done: dayTodo.isDone}">
                      {{ index +1 }} {{ dayTodo.text }}
                      </span>
                      <span @click="deleteTodo(idx, index)"><b-icon icon="x"></b-icon></span>
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
// import WeekDayTodo from "./WeekDayTodo.vue";
import draggable from "vuedraggable";
export default {
  components: {
    // appWeekDayTodo: WeekDayTodo,
    draggable,
  },
  data() {
    return {
      options: {
        group: "myTodos",
        animation: 200
      },
    };
  },
  computed: {
    dayTodos: {
      get() {
        return this.$store.getters.dayTodos;
      },
      // set(value) {
      //   return this.$store.commit('updateDayTodos', value);
      // }
    },
    allTodos: {
      get() {
        return this.$store.getters.allTodos;
      },
      // set(value) {
      //   this.$store.commit('updateAllTodos', value);
      // }
    },
    week: {
      get() {
        return this.$store.getters.week;
      },
      // set(value) {
      //   this.$store.commit('updateWeek', value);
      // }
    }
  },
  methods: {
    deleteTodo(idx, index) {
      if(confirm('Are you sure?')) {
        this.week[idx].dayTodos.splice(index, 1);
      }
    },
    moved() {
      alert('moved');
      console.log('allTodos',this.allTodos[0]);
      console.log('week',this.week[0]);
    }
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
