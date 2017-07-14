<template>
  <div class="row">
    <div class="row card">
      <div id="chart1" class="col s3 ct-chart"></div>
      <div class="col s3"></div>
      <div id="chart2" class="col s3 offset-s6 ct-chart"></div>
    </div>
    <div class="col s12">
      <div class="row col s6 dev">
        <ul class="collapsible popout" data-collapsible="accordion">
          <li>
            <div class="collapsible-header">Current database information</div>
            <div class="collapsible-body">
              <span>Current question count, Pie's (Category, Level)</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">User generated templates</div>
            <div class="collapsible-body">
              <span>'Tabs in Cards' Recents tab and Templates tab</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">Search database</div>
            <div class="collapsible-body">
              <span>Will be located at right of 'Tabs in Cards'. Beautiful Search Panel with only necessary buttons.</span>
            </div>
          </li>
        </ul>
      </div>
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