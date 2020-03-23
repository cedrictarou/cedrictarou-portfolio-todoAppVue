import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasksArray: [
      { day: 'none', text: 'nonday-task1', isDone: false},
      { day: 'none', text: 'noneday-task2', isDone: false},
      { day: 'Monday', text: 'Monday-task1', isDone: false},
      { day: 'Monday', text: 'Tuesday-task2', isDone: false},
      { day: 'Monday', text: 'Tuesday-task3', isDone: false},
      { day: 'Monday', text: 'Tuesday-task4', isDone: false},
      { day: 'Monday', text: 'Tuesday-task5', isDone: false},
      { day: 'Wednesday', text: 'Wednesday-task', isDone: false},
      { day: 'Thursday', text: 'Thursday-task', isDone: false},
      { day: 'Friday', text: 'Friday-task', isDone: false},
      { day: 'Saturday', text: 'Saturday-task', isDone: false},
      { day: 'Sunday', text: 'Sunday-task', isDone: false},
    ],
  },
  getters: {
    allTasksArray: state => state.allTasksArray,
  }, 
  mutations: {
    deleteTask (state, [deletedItems, idx]) {
      deletedItems.splice(idx, 1);
    },
    updateAllTasksArray(state, value) {
      state.allTasksArray = value;
    },
  },
  actions: {

  }
})