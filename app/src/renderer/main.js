import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

require('material-design-lite/material.min.css');
require('material-design-lite/material.min.js');
require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');
require('chartist/chartist.min.js');
require('chartist/chartist.min.css');

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
