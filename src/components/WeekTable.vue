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
        <tr v-for="(dayName, index) in daysArray" 
          :key="dayName.id" >
          <th scope="row">{{ dayName.day }}</th>
          <td>
            <app-day-tasks-cmp :dayArray="daysArray[index]">
            </app-day-tasks-cmp>
          </td>
        </tr>
        <!-- <tr>
          <th scope="row">Tuesday</th>
          <td>
            <app-tuesday-cmp></app-tuesday-cmp>
          </td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>
            <app-wednesday-cmp></app-wednesday-cmp>
          </td>
        </tr> -->
        <!-- <tr>
          <th scope="row">Thursday</th>
          <td>
            <app-thursday-cmp></app-thursday-cmp>
          </td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>
            <app-friday-cmp></app-friday-cmp>
          </td>
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          <td>
            <app-saturday-cmp></app-saturday-cmp>
          </td>
        </tr>
        <tr>
          <th scope="row">Sunday</th>
          <td>
            <app-sunday-cmp></app-sunday-cmp>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
// import MondayCmp from "./daysCmp/MondayCmp.vue";
// import TuesdayCmp from "./daysCmp/TuesdayCmp.vue";
// import WednesdayCmp from "./daysCmp/WednesdayCmp.vue";
// import ThursdayCmp from "./daysCmp/ThursdayCmp.vue";
// import FridayCmp from "./daysCmp/FridayCmp.vue";
// import SaturdayCmp from "./daysCmp/SaturdayCmp.vue";
// import SundayCmp from "./daysCmp/SundayCmp.vue";
import DayTasksCmp from "./daysCmp/DayTasksCmp.vue";
export default {
  components: {
    // appMondayCmp: MondayCmp,
    // appTuesdayCmp: TuesdayCmp,
    // appWednesdayCmp: WednesdayCmp,
    // appThursdayCmp: ThursdayCmp,
    // appFridayCmp: FridayCmp,
    // appSaturdayCmp: SaturdayCmp,
    // appSundayCmp: SundayCmp,
    appDayTasksCmp: DayTasksCmp,
  },
  data() {
    return {
      daysArray: [
        {day:'modnay',tasks: [
            {task: 'aaaaa', isDone: false},
            {task: 'bbbb', isDone: false}
          ],
        },
        {day:'tuesday',tasks: [
            {task: 'cccccc', isDone: false},
            {task: 'dddddd', isDone: false}
          ],
        },
      ]
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
