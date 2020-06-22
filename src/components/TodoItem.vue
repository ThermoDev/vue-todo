<template>
  <!-- Bind is-complete class depending on the value of todo.completed -->
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox"  v-on:change="markComplete"  v-bind:checked="todo.completed" /> {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
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
  background-color: #efefef;
  padding: 10px;
  border-bottom: 1px #8d8d8d dotted;
}

.is-complete {
  text-decoration: line-through;
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
