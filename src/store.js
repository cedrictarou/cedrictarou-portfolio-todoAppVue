import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasksArray: [
      { id: 0, day: 'none', text: 'nonday-task1', isDone: false},
      { id: 1, day: 'Monday', text: 'monday-task2', isDone: false},
      { id: 2, day: 'Monday', text: 'Monday-task1', isDone: false},
      { id: 3, day: 'Tuesday', text: 'Tuesday-task2', isDone: false},
    ],
  },
  getters: {
    allTasksArray: state => state.allTasksArray,
    newAllTasksArray: (state, getters) => {
      //allTasksArrayを更新するための処理
      state.allTasksArray = [...getters.noneDayArray, ...getters.mondayArray, ...getters.tuesdayArray];
      return state.allTasksArray;
    },
    getTodoById: state => (id) => {
      return state.allTasksArray.find(todo => todo.id === id);
    },
    noneDayArray: (state, getters) => {
      return getters.allTasksArray.filter(item => item.day === 'none');
    },
    mondayArray: (state, getters) => {
      return getters.allTasksArray.filter(item => item.day === 'Monday');
    },
    tuesdayArray: (state, getters) => {
      return getters.allTasksArray.filter(item => item.day === 'Tuesday');
    },
    // wednesdayArray: (state, getters) => {
    //   return getters.allTasksArray.filter(item => item.day === 'Wednesday');
    // },
    // thursdayArray: (state, getters) => {
    //   return getters.allTasksArray.filter(item => item.day === 'Thursday');
    // },
    // fridayArray: (state, getters) => {
    //   return getters.allTasksArray.filter(item => item.day === 'Friday');
    // },
    // saturdayArray: (state, getters) => {
    //   return getters.allTasksArray.filter(item => item.day === 'Saturday');
    // },
    // sundayArray: (state, getters) => {
    //   return getters.allTasksArray.filter(item => item.day === 'Sunday');
    // },
  }, 
  mutations: {
    updateNoneDayArray(getters, newValue) {
      getters.noneDayArray = newValue;
    },
    updateMondayArray(getters, newValue) {
      getters.mondayArray = newValue;
    },
    updateTuesdayArray(getters, newValue) {
      getters.tuesdayArray = newValue;
    },
    // updateAllTasksArray(state, newValue) {
    //   state.allTasksArray = newValue;
    // },
    doDeleteTodo(state, taskId) {
      //allTasksArrayから該当のidをもつ要素を削除して、再代入することでTodoを削除
      state.allTasksArray = state.allTasksArray.filter( item => {
        return item.id !== taskId;
      });
    }
  },
})