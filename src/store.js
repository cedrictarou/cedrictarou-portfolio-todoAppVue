import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTodos: [
      { text: 'Just a thing to see.', isDone: false},
    ],
    week: [
      {dayNum: 0, dayTodos: [{text: 'bbbbbb', isDone: false}]},
      { dayNum: 1, dayTodos: [{text: 'aaaaa', isDone: false}]},
      {dayNum: 2, dayTodos: []},
      {dayNum: 3, dayTodos: []},
    ],
    // message: '',
  },
  getters: {
    //allTodosの内チェックされたものだけの配列
    doneTodos: state => state.week[0].dayTodos.filter(function (todo) {
      return todo.isDone;
    }),
    dayTodos: state => state.week[0].dayTodos,
    week: state => state.week,
    allTodos: state => state.allTodos,
    // message: state => state.message
  },
  mutations: {
    updateAllTodos(state, newAllTodos) {
      state.allTodos = newAllTodos;
    },
    updateWeek(state, newWeek) {
      state.week = newWeek;
    },
    updateDayTodos(getters, newDayTodos) {
      getters.dayTodos = newDayTodos;
    },
    // updatedMessage(state, newMessage) {
    //   state.message = newMessage;
    // }
  },  
})