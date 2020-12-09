import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";
require('dotenv').config()

Vue.config.productionTip = false;

// middleware -> google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "geometry,drawing,places",
  },
  autobindAllEvents: false,
});

// middleware -> current location
Vue.use(VueGeolocation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
