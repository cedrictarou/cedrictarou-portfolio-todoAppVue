import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTodos: [
      { text: 'Just a thing to see.', isDone: false, day: 'none' },
    ],
    dayTodos: [],
  },
  getters: {
    //allTodosの内チェックされたものだけの配列
    remaining: state => state.dayTodos.filter(function (todo) {
      return !todo.isDone;
    })
  }
  
})