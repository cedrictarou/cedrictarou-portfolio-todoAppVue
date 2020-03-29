import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nonedayArray: [
      {text: 'nonday-task1', isDone: false},
      {text: 'nonday-task2', isDone: false},
    ],
    mondayArray: [
      {text: 'monday-task1', isDone: false},
      {text: 'monday-task2', isDone: false},
    ],
    tuesdayArray: [
      {text: 'tuesday-task1', isDone: false},
      {text: 'tuesday-task2', isDone: false},
    ],
    wednesdayArray: [
      {text: 'wednesday-task1', isDone: false},
      {text: 'wednesday-task2', isDone: false},
    ],
    thursdayArray: [
      {text: 'thursday-task1', isDone: false},
      {text: 'thursday-task2', isDone: false},
    ],
    fridayArray: [
      {text: 'friday-task1', isDone: false},
      {text: 'friday-task2', isDone: false},
    ],
    saturdayArray: [
      {text: 'saturday-task1', isDone: false},
      {text: 'saturday-task2', isDone: false},
    ],
    sundayArray: [
      {text: 'sunday-task1', isDone: false},
      {text: 'sunday-task2', isDone: false},
    ],
  },
  getters: {
    nonedayArray: state => state.nonedayArray,
    mondayArray: state => state.mondayArray,
    tuesdayArray: state => state.tuesdayArray,
    wednesdayArray: state => state.wednesdayArray,
    thursdayArray: state => state.thursdayArray,
    fridayArray: state => state.fridayArray,
    saturdayArray: state => state.saturdayArray,
    sundayArray: state => state.sundayArray,
    allTasksArray: (state, getters) => {
      const allTasksArray = [...getters.nonedayArray, ...getters.mondayArray, ...getters.tuesdayArray, ...getters.wednesdayArray, ...getters.fridayArray, ...getters.saturdayArray, ...getters.sundayArray];
      return allTasksArray;
    }
  }, 
  mutations: {
    updateNonedayArray(state, newArray) {
      state.nonedayArray = newArray;
    },
    updateMondayArray(state, newArray) {
      state.mondayArray = newArray;
    },
    updateTuesdayArray(state, newArray) {
      state.tuesdayArray = newArray;
    },
    updateWednesdayArray(state, newArray) {
      state.wednesdayArray = newArray;
    },
    updateThursdayArray(state, newArray) {
      state.thursdayArray = newArray;
    },
    updateFridayArray(state, newArray) {
      state.fridayArray = newArray;
    },
    updateSaturdayArray(state, newArray) {
      state.saturdayArray = newArray;
    },
    updateSundayArray(state, newArray) {
      state.sundayArray = newArray;
    },
  },
})