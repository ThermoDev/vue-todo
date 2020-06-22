<template>
  <div class="about">
    <h1>ABOUT</h1>
    <h3>
      This is a Todo app made using vue.js.
    </h3>
    <p>
      The Todo operations makes fake API requests that apply the async await
      syntax so that it would asynchronously make the requests as needed.
      Calling a request is why it takes a while for the list to update, as the
      thread waits until the response is fetched before the update occurs on the
      newly "fetched" data.
    </p>
    <p>
      Performance could be heavily improved if we are only updating local
      variables, but doing it this way ensures that the code can be used if CRUD
      operations on a remote database server can be performed.
    </p>
    <p>
      You can learn more about vue.js by watching the following
      <a href="https://www.youtube.com/watch?v=Wy9q22isx3U">video</a>
    </p>
  </div>
</template>
