# TODO List App in Vue.js
The project is currently running on [netlify](https://thermo-vue-todo.netlify.app/).

## About
The Todo operations makes fake API requests that apply the async await
syntax so that it would asynchronously make the requests as needed.
Calling a request is why it takes a while for the list to update, as the
thread waits until the response is fetched before the update occurs on the
newly "fetched" data.


Performance could be improved if we are only updating local
variables, but doing it this way ensures that the code can be used if CRUD
operations on a remote database server can be performed.
