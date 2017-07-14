<template>
  <div>
    <div class="title">DeHa</div>
    <p class="dev">
      You are using electron v{{ versions['atom-shell'] }} with node v{{ versions.node }} on the {{ platform }} platform.
    </p>
    <ul class="dev">
      <li><a href="https://simulatedgreg.gitbooks.io/electron-vue/content/index.html">documentation</a></li> |
      <li><a href="http://electron.atom.io/">electron</a></li> |
      <li><a href="http://vuejs.org/">vue.js</a></li>
    </ul>
  </div>
</template>

<script>
  import os from 'os'

  export default {
    data() {
      return {
        platform: os.platform(),
        versions: process.versions
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    font-family: Helvetica;
    text-align: center;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);
  }

  a {
    color: rgb(50, 174, 110);
    text-decoration: none;
  }

  a:hover {
    color: rgb(40, 56, 76);
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li {
    display: inline-block;
  }
</style>