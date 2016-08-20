<template>
	<div id="statistics">
		<h1 class="txt">{{data.title}}</h1>
		<div v-for="q in data.que">
			<echarts :data="q" :index="$index+1"></echarts>
		</div >
	</div>
</template>
<script>
	import data from '../data';
	import echarts from './echarts';

	export default {
		data () {
			return {
				data: {}
			}
		},
		route: {
			data () {
				let _data = data.out();
				let id = this.$route.path.replace(/[^0-9]/ig, '')
				if (id > _data.length) {
					console.log(id);
				} else {
					this.data = _data[id];
				}
			}
		},
		components: {
			echarts
		}
	}
</script>