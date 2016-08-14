import vue from 'vue';
import Router from 'vue-router';
import data from './data.js';
import App from './components/app.vue';
import List from './components/list.vue';
import Home from './components/home.vue';
import None from './components/404.vue';

vue.use(Router);

const router = new Router();

router.map({
	'/': {
		name: 'Home',
		component: Home
	},
	'/404': {
		name: '404',
		component: none
	},
	'/list': {
		name: 'list',
		component: List
	}
})
router.redirect({
	'*': '/404'
})

router.start(App, '#app');