<template>
  <div>
    <nav class="nav-extended teal titlebar">
      <title-logo class="logo"></title-logo>
    </nav>
    <div class="col s12">
      <div class="center-align">
        <create></create>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleLogo from './Main/TitleLogo'
  import Create from './Main/Create/Create'

  $(document).ready(function () {
    $(".toolCreate").hide();
  });

  export default {

    components: {
      TitleLogo,
      Create
    },
    name: 'main'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: fit-content;
  }

  .titlebar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }

  .nav-extended {
    height: 990px;
  }

  .logo {
    position: absolute;
    z-index: 100;
    width: 100%;
  }
</style>