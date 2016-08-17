import vue from 'vue';
import Router from 'vue-router';

import data from './data';

import App from './components/app';
import List from './components/list';
import Home from './components/home';
import None from './components/404';
import New from './components/new';

vue.config.devtools = true;
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
	},
	'/new': {
		name: 'new',
		component: New
	}
})
router.redirect({
	'*': '/404'
})

router.start(App, '#app');