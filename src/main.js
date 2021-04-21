import bootstrap from 'bootstrap'
import jquery from 'jquery'
import popper from 'popper.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// REVIEW this is adding popper and jquery to the app and is no longer needed in index.html
createApp(App)
  .use(router, bootstrap, jquery, popper)
  .mount('#app')
