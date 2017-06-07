<template>
  <div class="row center-align">
    <div class="col s3 left-align">
      <div id="chart1" class="ct-chart ct-perfect-fourth"></div>
    </div>
    <div class="col s6">
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp hoverable">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Type</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">{{sample}}</td>
            <td>Functions</td>
            <td><i class="material-icons">filter_5</i></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">2016 Mid</td>
            <td>Problems</td>
            <td><i class="material-icons">filter_3</i></td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">2012 Easy</td>
            <td>Square</td>
            <td><i class="material-icons">filter_1</i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col s3 right-align">
      <div id="chart2" class="ct-chart ct-perfect-fourth"></div>
    </div>
  </div>
</template>

<script>
  import {
    default as code
  } from '../../helpers/Database.js'
  export default code
</script>

<style>
  @keyframes dashoffset-seven {
    0% {
      stroke-dashoffset: 7px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.0;
    }
    50% {
      opacity: 1.0;
    }
    100% {
      opacity: 0.0;
    }
  }

  .ct-chart .ct-series .ct-line {
    stroke: #00897b;
    stroke-width: 2px;
    stroke-dasharray: 5px 2px;
    animation: dashoffset-seven 2s infinite linear;
  }

  .ct-series .ct-point {
    stroke: #00897b;
    stroke-width: 7px;
    animation: pulse 2s ease-out infinite;
    opacity: 0.0;
  }

  .ct-series .ct-area {
    fill: #00897b;
  }

  .ct-series .ct-bar {
    stroke-width: 8px;
  }

  .ct-series-a .ct-bar {
    stroke: #26a69a;
  }

  .ct-series-b .ct-bar {
    stroke: #80cbc4;
  }

  .ct-series-c .ct-bar {
    stroke: #b2dfdb;
  }
</style>