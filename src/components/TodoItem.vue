<template>
  <!-- Bind is-complete class depending on the value of todo.completed -->
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <div v-on:click="markComplete" v-bind:checked="todo.completed">
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed; 
    },
  },
};
</script>

<style scoped>
.todo-item {
  background-color: #607d8b;
  color: white;
  padding: 10px;
  border-bottom: 1px #8d8d8d dotted;
  cursor: pointer;
}

.todo-item:hover{
  background-color: #8eacbb;
}

.is-complete {
  text-decoration: line-through;
  background-color: #34515e;
  color: white;
}

.del {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
