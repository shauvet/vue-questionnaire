import vue from 'vue';
import Router from 'vue-router';
import data from './data.js';
import App from './components/app.vue';

vue.use(Router);

var router = new Router();

router.start(App, '#app');