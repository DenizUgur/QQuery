<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(http://fonts.googleapis.com/icon?family=Material+Icons);
  @import url(https://fonts.googleapis.com/css?family=Product+Sans:400,400i,700,700i);

  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  .dev {
    background: repeating-linear-gradient(45deg, #DDD037, #DDD037 10px, #000000 10px, #000000 20px);
  }

  .beta {
    border: 3px dashed rgba(255, 255, 0, .8);
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: radial-gradient( ellipse at center,
    rgba(255, 255, 255, 1) 0%,
    rgba(229, 229, 229, .85) 100%);
    font-family: Lato, Helvetica, sans-serif;
  }
</style>