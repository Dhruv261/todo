import { createStore } from 'vuex';

const store = createStore({
  state: {
    todoArray: [],
    bsClr: false,
    prsClr: false,
    task: '',
  },
  mutations: {
    concatTodo(state) {
      if (this.state.task.length === 0) {
      } else {
        if (this.state.bsClr === true) {
          const x = {
            index: this.state.todoArray.length + 1,
            task: this.state.task,
            type: 'Business',
            completed: false,
          };
          this.state.todoArray.push(x);
          localStorage.setItem('task', JSON.stringify(this.state.todoArray));
        } else {
          const x = {
            index: this.state.todoArray.length + 1,
            task: this.state.task,
            type: 'Personal',
            completed: false,
          };
          this.state.todoArray.push(x);
          localStorage.setItem('task', JSON.stringify(this.state.todoArray));
        }
      }
      this.state.bsClr = false;
      this.state.prsClr = false;
    },
    changeCompletedState(state, { e, i }) {
      console.log(i);
      this.state.todoArray.map((data) => {
        if (data.index === i) {
          data.completed = e.target.checked;
          localStorage.setItem('task', JSON.stringify(this.state.todoArray));
        }
      });
    },
    deleteTask(state, i) {
      console.log('i: ', i);
      this.state.todoArray.splice(i, 1);
      localStorage.setItem('task', JSON.stringify(this.state.todoArray));
    },
  },
  getters: {},
  actions: {},
  modules: {},
});

export default store;
