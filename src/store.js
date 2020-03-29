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
    getTodoById: state => (id) => {
      return state.allTasksArray.find(todo => todo.id === id);
    },
  }, 
  mutations: {
    updateAllTasksArray(state, newArray) {
      state.allTasksArray = newArray;
    },
    doDeleteTodo(state, taskId) {
      //allTasksArrayから該当のidをもつ要素を削除して、再代入することでTodoを削除
      state.allTasksArray = state.allTasksArray.filter( item => {
        return item.id !== taskId;
      });
    },
    doAddTodo(state, newTodo) {
      //NewTodo.vueで作った新しいTodoをstate.allTasksArrayに追加する処理。
      state.allTasksArray.push(newTodo);
    }
  },
})