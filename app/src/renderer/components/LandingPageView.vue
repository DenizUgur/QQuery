<template>
  <div>
    <nav class="nav-extended indigo lighten-2 titlebar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">QQuery</a>
      </div>
      <div class="nav-content row">
        <ul class="tabs tabs-transparent">
          <li class="tab col s4"><a href="#second">Database</a></li>
          <li class="tab col s4"><a class="active" href="#main" onclick="$('.fixed-action-btn.toolbar').openToolbar();">Main</a></li>
          <li class="tab col s4"><a href="#third">Collapsible</a></li>
        </ul>
      </div>
    </nav>
    <div id="main" class="col s12 center-align container">
      <current-page></current-page>
      <versions></versions>
      <links></links>
    </div>
    <div id="second" class="row center-align container">
      <database class="col m6 offset-m3 hoverable"></database>
    </div>
    <div id="third" class="col s12">
      <div class="center-align container">
        <collapsible></collapsible>
      </div>
    </div>
    <action-bar></action-bar>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import ActionBar from './LandingPageView/ActionBar'
  import Collapsible from './LandingPageView/Collapsible'
  import Database from './LandingPageView/Database'

  export default {

    components: {
      CurrentPage,
      Links,
      Versions,
      ActionBar,
      Collapsible,
      Database
    },
    name: 'landing-page'
  }

  $(document).ready(function () {
    $('ul.tabs').tabs();
    $('.collapsible').collapsible();

    $(".fixed-action-btn.toolbar > a").click(function () {
      $('ul.tabs').tabs('select_tab', 'main');
      $('.fixed-action-btn.toolbar').openToolbar();
    });

  });
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
</style>