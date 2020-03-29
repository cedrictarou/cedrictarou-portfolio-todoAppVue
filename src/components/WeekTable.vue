<template>
<div class="mt-2">
  <h3 class="text-left">Tasks of each day</h3>
  <p>タスクを移動させて優先順位を決めましょう。左にくるほど重要です。</p>
  <div class="row pt-2 pb-2">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tasks</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="day in week" :key="day.id"> -->
        <tr>
          <th scope="row">Monday</th>
          <td>
            <app-dayTasks>
            </app-dayTasks>
          </td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>
            <app-dayTasks></app-dayTasks>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import DayTasks from "./DayTasks.vue";
export default {
  components: {
    appDayTasks: DayTasks,
  },
  data() {
    return {
      // week: ['Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      week: ['Monday'],
    }
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
