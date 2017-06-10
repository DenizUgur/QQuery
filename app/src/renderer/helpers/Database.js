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
            showGrid: false,
            offset: 0
        },
        axisY: {
            showLabel: false,
            showGrid: true,
            offset: 0
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
        },
        axisX: {
            offset: 0
        }
    });
});

export default {
    data: () => ({
    nutrition: [
      {
        dessert: 'Frozen yogurt',
        type: 'ice_cream',
        calories: '159',
        fat: '6.0',
        comment: 'Icy'
      },
      {
        dessert: 'Ice cream sandwich',
        type: 'ice_cream',
        calories: '237',
        fat: '9.0',
        comment: 'Super Tasty'
      },
      {
        dessert: 'Eclair',
        type: 'pastry',
        calories: '262',
        fat: '16.0',
        comment: ''
      },
      {
        dessert: 'Cupcake',
        type: 'pastry',
        calories: '305',
        fat: '3.7',
        comment: ''
      },
      {
        dessert: 'Gingerbread',
        type: 'other',
        calories: '356',
        fat: '16.0',
        comment: ''
      }
    ]
  }),

  methods: {
      onSelect(data) {
        this.selectedData = data;
        this.$forceUpdate();
      },
      onSort(sort) {
        this.sort = sort;
      },
      onPagination (e) {
          this.size = e.size;
          this.page = e.page;
          this.$fetchData()
      }
  }
}