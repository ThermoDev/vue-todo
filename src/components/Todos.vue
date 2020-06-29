<template>
  <div>
    <div class="todos" v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  name: 'Todos',
  components: { TodoItem },
  props: ['todos'],
};
</script>

<style scoped>
  .todos {
    max-width: 1000px;
    margin: auto;
    border: 1px solid black;
  }
</style>
