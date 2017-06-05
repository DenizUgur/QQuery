<template>
<div class="fixed-action-btn toolbar">
    <a class="btn-floating btn-large indigo lighten-2">
      <i class="large material-icons">home</i>
    </a>
    <ul>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">insert_chart</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">format_quote</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">publish</i></a></li>
      <li class="waves-effect waves-light"><a href="#!"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div> 
</template>

<script>
  import {
    default as code
  } from '../../helpers/ActionBar.js'
  export default code
</script>