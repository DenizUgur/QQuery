  import os from 'os'
  import Chartist from 'chartist/chartist.min.js'

  $(document).ready(function () {

      new Chartist.Line('#chart1', {
          series: [
              [5, 2, 4, 2, 0]
          ]
      }, {
          width: 230,
          height: 220,
          low: 0,
          showPoint: true,
          showArea: true,
          axisX: {
              showLabel: false,
              showGrid: false
          },
          axisY: {
              showLabel: false,
              showGrid: true
          }
      }).on('draw', function (data) {
          data.element.animate({
              opacity: {
                  dur: 1000,
                  from: 0,
                  to: 1
              },
          });
      });

      new Chartist.Bar('#chart2', {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          series: [
              [800000, 1200000, 1400000, 1300000],
              [200000, 400000, 500000, 300000],
              [100000, 200000, 400000, 600000]
          ]
      }, {
          stackBars: true,
          width: 230,
          height: 220,
          axisY: {
              labelInterpolationFnc: function (value) {
                  return (value / 1000) + 'k';
              }
          }
      });
  });

  export default {
      data() {
          return {
              sample: '2015 Hardest'
          }
      }
  }