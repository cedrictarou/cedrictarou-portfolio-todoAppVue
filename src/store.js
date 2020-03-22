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
        id: 'Monday', dayTodos: [{ text: 'buy some mellons.', isDone: true }, { text: 'buy some mellons2.', isDone: true }]
      },
      {
        id: 'Tuesday', dayTodos: [{ text: 'buy some bananas.', isDone: true }]
      },
      {
        id: 'Wedenesday', dayTodos: [{ text: 'buy some apples.', isDone: false }]
      },
      {
        id: 'Thursday', dayTodos: [{ text: 'buy some grapes.', isDone: false }, { text: 'buy some grapes2.', isDone: false }]
      },
      {
        id: 'Friday', dayTodos: [{ text: 'buy some strawberry.', isDone: false }]
      },
      {
        id: 'Saturday', dayTodos: [{ text: 'buy some pines.', isDone: false }]
      },
      {
        id: 'Sunday', dayTodos: [{ text: 'buy some pears.', isDone: false }]
      },
    ],
    myArray: ['aaaa', 'bbbb', 'cccc'],
  },
  getters: {
    myArray: state => state.myArray,
    reservedTasks: state => state.reservedTasks,
    week: state => state.week,
    weekTasks: (state, getters) => getters.week.map(day => day.dayTodos),
    allTasksArray: (state, getters) => {
      //1次元の配列に変換する処理
      const list = getters.weekTasks.reduce((pre, current) => { pre.push(...current); return pre }, []);
      return list;
    },
    doneTasksArray: (state, getters) => {
      return getters.allTasksArray.filter( item => item.isDone);
    },
    // mondayArray: state => state.week.(item => item.id ==='Monday'),
    // mondayTasksArray: (state, getters) => getters.mondayArray.map( item => item.dayTodos),
  }, 
  mutations: {
    deleteTask (state, [deletedItems, idx]) {
      deletedItems.splice(idx, 1);
    },
    updateReservedTask(getters, value) {
      getters.reservedTasks = value;
    }
  }
})