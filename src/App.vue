<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name: 'app',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a:hover {
  color: #757575;
}

a {
  color:blue;
  text-decoration: none;
}

p{
  padding:10px;
}

#nav a.router-link-exact-active {
  color: #f44336;
}
</style>
