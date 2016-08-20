<template>
	<div class="chart" transition="gui">
		{{name | json}}
		{{num | json}}
		<h2 class="txt">Q{{index}} {{data.title}}</h2>
		<div class="f-tc">
			<span>
				题型：
				<span v-if="data.type=='radio'">单选题</span>
				<span v-if="data.type=='checkbox'">多选题</span>
				<span v-if="data.type=='textarea'">文本题</span>
			</span>
		</div>
		<div class="chartss" v-if="data.type!='textarea'">
			<canvas class="charts" width="500" height="400" v-el:canvas></canvas>
		</div>
	</div>
</template>
<script>
	import echarts from 'echarts';

	export default {
		data () {
			return {
				datas: []
			}
		},
		props: {
			index: Number,
			data: Object
		},
		ready: function () {
			if (this.data.type != 'textarea') {
				for (let i = 0; i < this.data.items.length; i++) {
					this.datas.push({'name': this.data.items[i].title, 'value': this.data.items[i].num});
				}
				this.option();
			}
		},
		methods: {
			option: function () {
				let myChart = echarts.init(this.$els.canvas);
				myChart.setOption({
					title: {
						subtitle: '圆形图',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/> {b} : {c} ({d}%)'
					},
					series: [
						{
							name: '访问来源',
							type: 'pie',
							radius: '55%',
							center: ['50%', '60%'],
							data: this.datas,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shaodowColor: 'rgba(0, 0, 0, .5)'
								}
							}
						}
					],
					textStyle: {
						fontSize: 24
					}
				})
			}
		}
	}
</script>
<style>
	canvas{display: block;}
	.chartss{width: 50rem; margin: 0 auto;}
	.chart{border-bottom: .1rem solid #ccc; margin: 2rem 0;}
</style>