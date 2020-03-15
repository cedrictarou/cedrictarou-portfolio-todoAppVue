import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservedTasks: [
      { text: 'Just a thing to see.', isDone: false }
    ],
    mon: [{ text: 'buy some mellons.', isDone: false }],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  },
  getters: {
    reservedTasks: state => state.reservedTasks,
    allTasks: state => [...state.mon, ...state.tue, ...state.wed, ...state.thu, ...state.fri, ...state.sat, ...state.sun],
    doneTasks: (state, getters) => {
      return getters.allTasks.filter(task => task.isDone);
    },
    mon: state => state.mon,
    tue: state => state.tue,
    wed: state => state.wed,
    thu: state => state.thu,
    fri: state => state.fri,
    sat: state => state.sat,
    sun: state => state.sun,
  }, 
  mutations: {
    delteTask(state, index) {
      state.mon.splice(index, 1);
    }
  }
})