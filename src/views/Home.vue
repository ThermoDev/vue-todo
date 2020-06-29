<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from 'axios';
export default {
  name: 'Home',
  components: { Todos, AddTodo },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async deleteTodo(id) {
      try {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      } catch (e) {
        console.log('Error: ' + e);
      }

      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    async addTodo(newTodo) {
      try {
        const { title, completed } = newTodo;
        this.todos = [...this.todos, res.data];
        const res = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          {
            title,
            completed,
          }
        );
      } catch (e) {
        console.log('Error: ' + e);
      }
    },
  },
  async created() {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=4'
      );
      this.todos = res.data;
    } catch (e) {
      console.log('Error: ' + e);
    }
  },
};
</script>

<!-- Global Styling -->
<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', sans-serif;
}

body {
  font-family: sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background-color: #373737;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #757575;
}
</style>
