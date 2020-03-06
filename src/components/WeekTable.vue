<template>
<div>
  <div class="row pt-2 pb-2 month_table">
    <div class="col-3">
      <h3>Mon</h3>
      <draggable class="list-group" :list="Monday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Monday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Tue</h3>
      <draggable class="list-group" :list="Tuesday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Tuesday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Wed</h3>
      <draggable class="list-group" :list="Wednesday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Wednesday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Thu</h3>
      <draggable class="list-group" :list="Thursday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Thursday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Fri</h3>
      <draggable class="list-group" :list="Friday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Friday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Sat</h3>
      <draggable class="list-group" :list="Saturday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Saturday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <h3>Sun</h3>
      <draggable class="list-group" :list="Sunday" group="myTodos">
        <div
          class="list-group-item"
          v-for="(element, index) in Sunday"
          :key="element.name"
        >
          {{ index }} {{ element.name }} 
        </div>
      </draggable>
    </div>
  </div>
</div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "todoWeekly",
  components: {
    draggable
  },
  data() {
    return {
      options: {
        group: "myTodos",
        animation: 200
      },
      Monday: [
        { name: "John", id: 1 },
      ],
      Tuesday: [
        { name: "Juan", id: 5 },
      ],
      Wednesday: [
        { name: "Juan", id: 5 },
      ],
      Thursday: [
        { name: "Juan", id: 5 },
      ],
      Friday: [
        { name: "Juan", id: 5 },
      ],
      Saturday: [
        { name: "Juan", id: 5 },
      ],
      Sunday: [
        { name: "Juan", id: 5 },
      ],
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    // log: function(evt) {
    //   window.console.log(evt);
    // }
  }
};
</script>
<style>
.month_table {
  background-color: cornflowerblue;
}
</style>
