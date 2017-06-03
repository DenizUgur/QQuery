<template>
  <div>
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">QQuery</a>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent">
          <li class="tab"><a class="active" href="#test1">Main</a></li>
          <li class="tab"><a href="#test2">Second</a></li>
          <li class="tab"><a href="#test4">Third</a></li>
        </ul>
      </div>
    </nav>
    <div class="center-align">
      <h4>Welcome.</h4>
      <current-page></current-page>
      <versions></versions>
      <links></links>
      <material-test></material-test>
      <!-- Modal Trigger -->
      <a class="waves-effect waves-light btn" href="#modal1">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import MaterialTest from './LandingPageView/MaterialTest'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      MaterialTest
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: fit-content;
  }
</style>