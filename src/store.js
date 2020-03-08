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
  
})