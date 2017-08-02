<template>
  <div>
    <div class="box">
      <data-table id="genres"></data-table>
      <div class="row" id="level">
        <h1>Choose a <i>Level</i></h1>
        <div class="col s4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Easy</span>
            </div>
            <div class="card-action row">
              <a class="status col s4 white-text">1</a>
              <a class="status col s4 white-text">2</a>
              <a class="status col s4 white-text">3</a>
            </div>
          </div>
        </div>
        <div class="col s4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Medium</span>
            </div>
            <div class="card-action row">
              <a class="status col s4 white-text">1</a>
              <a class="status col s4 white-text">2</a>
              <a class="status col s4 white-text">3</a>
            </div>
          </div>
        </div>
        <div class="col s4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Hard</span>
            </div>
            <div class="card-action row">
              <a class="status col s4 white-text">1</a>
              <a class="status col s4 white-text">2</a>
              <a class="status col s4 white-text">3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="progress-layout">
      <div class="container">
        <div class="mini-step card-panel red accent-4">
          <span class="white-text">Genre's</span>
        </div>
        <div class="mini-step card-panel red accent-4">
          <span class="white-text">Level</span>
        </div>
        <div class="mini-step card-panel red accent-4">
          <span class="white-text">Radar Graph</span>
        </div>
      </div>
    </div>
    <a class="pNext btn-floating btn-large waves-effect waves-light green"><i class="material-icons">play_arrow</i></a>
    <div id="genre-selector" class="modal bottom-sheet">
      <div class="modal-content row">
        <h4>Genre Selection</h4>
        <p>A bunch of text</p>
        <div class="row">
          <div class="col s3">
            <h5>Available questions in Pool</h5>
            <span><font size="6">{This}</font> of <font size="10">{All}</font></span>
          </div>
          <div class="col s3">
            <h5>Level of Questions</h5>
            <div class="container left-align">
              <ul>
                <li>
                  <input type="checkbox" id="r1" />
                  <label for="r1">&#11088;</label>
                </li>
                <li>
                  <input type="checkbox" id="r2" />
                  <label for="r2">&#11088;&#11088;</label>
                </li>
                <input type="checkbox" id="r3" />
                <label for="r3">&#11088;&#11088;&#11088;</label>
                <li>
                  <input type="checkbox" id="r4" />
                  <label for="r4">&#11088;&#11088;&#11088;&#11088;</label>
                </li>
                <li>
                  <input type="checkbox" id="r5" />
                  <label for="r5">&#11088;&#11088;&#11088;&#11088;&#11088;</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="col s6">
            <h5>Rarity of the Questions</h5>
            </br>
            </br>
            <p class="range-field">
              <input type="range" id="rarity" step="25" min="25" max="100" value="25"/>
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    default as code
  } from './helpers/ParametersHelper.js'
  export default code
</script>

<style scoped>
  .card-panel {
    position: relative;
    transition: all 0.5s ease;
    user-select: none;
    cursor: pointer;
  }

  .progress-layout {
    position: absolute;
    bottom: 20%;
    margin-right: 15px;
    margin-left: 15px;
    width: 180px;
    height: 60%;
    right: 0;
  }

  .box {
    position: absolute;
    bottom: 10%;
    margin-left: 30px;
    width: 750px;
    top: 150px;
  }

  .pNext {
    position: absolute;
    right: 0;
    margin: 15px;
  }

  .curr {
    animation: _pulse 3s infinite;
  }

  .box>* {
    display: none;
  }

  #level {
    position: absolute;
    bottom: 10%;
    width: 99%;
  }

  .card {
    cursor: pointer;
  }

  .status {
    background-color: transparent;
    font-size: 20px;
  }

  .card-action {
    padding: 0;
  }

  .card-action>a {
    margin: 0 !important;
  }

  .row {
    margin-bottom: 0 !important;
  }

  [type="checkbox"]:checked+label:before {
    border-right: 2px solid rgb(237, 193, 34);
    border-bottom: 2px solid rgb(237, 193, 34);
  }

  @keyframes _pulse {
    0%,
    100% {
      background-color: #ff5252;
    }
    50% {
      background-color: rgb(237, 193, 34);
    }
  }
</style>