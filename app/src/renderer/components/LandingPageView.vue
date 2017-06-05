<template>
  <div>
    <nav class="nav-extended indigo lighten-2 titlebar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">QQuery</a>
      </div>
      <div class="nav-content row">
        <ul class="tabs tabs-transparent">
          <li class="tab col s4"><a href="#second">Modal</a></li>
          <li class="tab col s4"><a class="active" href="#main" onclick="$('.fixed-action-btn.toolbar').openToolbar();">Main</a></li>
          <li class="tab col s4"><a href="#third">Collapsible</a></li>
        </ul>
      </div>
    </nav>
    <div id="main" class="col s12 center-align container">
      <h4>Welcome</h4>
      <current-page></current-page>
      <versions></versions>
      <links></links>
    </div>
    <div id="second" class="col s12">
      <div class="center-align container">
        <h4>Modal Test</h4>
        <a class="waves-effect waves-light btn teal lighten-2" href="#alert">Modal</a>
      </div>
    </div>
    <div id="third" class="col s12">
      <div class="center-align container">
        <h4>Collapsible</h4>
        <collapsible></collapsible>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="alert" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
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

  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      ActionBar,
      Collapsible
    },
    name: 'landing-page'
  }

  $(document).ready(function () {
    $('#alert').modal('open');
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