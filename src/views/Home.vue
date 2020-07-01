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
    
    // Async/Await function to Delete a TODO item using it's ID
    async deleteTodo(id) {
      try {
        this.todos = this.todos.filter((todo) => todo.id !== id); // Keep every id that isn't this current one
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`); // Axios DELETE request to jsonplaceholder to delete ID
      } catch (e) {
        console.log('Error: ' + e)
      }
    },

    // Async/Await function to Add a todo item 
    async addTodo(newTodo) {
      try {
        const { id, title, completed } = newTodo; // ES6 Syntax to retrieve newTodo Title and Completed
        this.todos = [...this.todos, {id, title, completed }]; // Add todo await after awaiting response results
        const res = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          {
            title,
            completed,
          }
        );
        /* For purposes of this App, we will not await the results to add a new todo item */
        console.log(res.data);
        // this.todos = [...this.todos, res.data]; // Add todo await after awaiting response results
      } catch (e) {
        console.log('Error: ' + e);
      }
    },
  },

  // Fetches 4 todo items from jsonplaceholder upon creation
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
