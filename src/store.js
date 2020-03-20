import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservedTasks: [
      { text: 'Just a thing to see.', isDone: false }
    ],
    week: [
      {
        id: 0, dayTodos: [{ text: 'buy some mellons.', isDone: true }, { text: 'buy some mellons2.', isDone: true }]
      },
      {
        id: 1, dayTodos: [{ text: 'buy some bananas.', isDone: true }]
      },
      {
        id: 2, dayTodos: [{ text: 'buy some apples.', isDone: false }]
      },
      {
        id: 3, dayTodos: [{ text: 'buy some grapes.', isDone: false }, { text: 'buy some grapes2.', isDone: false }]
      },
      {
        id: 4, dayTodos: [{ text: 'buy some strawberry.', isDone: false }]
      },
      {
        id: 5, dayTodos: [{ text: 'buy some pines.', isDone: false }]
      },
      {
        id: 6, dayTodos: [{ text: 'buy some pears.', isDone: false }]
      },
    ],
  },
  getters: {
    reservedTasks: state => state.reservedTasks,
    week: state => state.week,
    allTasks: (state, getters) => getters.week.map(day => day.dayTodos),
    doneTasks: (state, getters) => {
      return getters.allTasks.filter(task => task.isDone);
    },
  }, 
  mutations: {
    deleteTask(getters, { deletedItems, idx }) {
      deletedItems.splice(idx, 1);
    }
  }
})