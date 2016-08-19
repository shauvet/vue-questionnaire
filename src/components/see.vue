<template>
	<div class="see" transition="gui">
		<h2 class="txt">{{data.title}}</h2>
	</div>
	<div class="content">
		<div class="question" v-for="q in data.que">
			<template v-if="q.type=='radio'">
				<h4>Q{{$index+1}} (单选题) {{q.title}}</h4>
				<ul>
					<li v-for="item in items">
						<input type="radio" name="radio">
						<span class="">{{item.title}}</span>
					</li>
				</ul>
			</template>
			<template v-if="q.type=='checkbox'">
				<h4>Q{{$index+1}} (多选题) {{q.title}}</h4>
				<ul>
					<li v-for="item in items">
						<input type="checkbox" name="radio-{{$index}}">
						<span class="">{{item.title}}</span>
					</li>
				</ul>
			</template>
			<template v-if="q.type=='textarea'">
				<h4>Q{{$index+1}} (文本题) {{q.title}}</h4>
				<ul>
					<li><textarea name="" id="" cols="30" rows="10"></textarea></li>
				</ul>
			</template>
		</div>
	</div>
</template>
<script>
	import datas from '../data';
	export default {
		data () {
			return {
				data: {}
			}
		},
		route: {
			data () {
				let _data = data.out();
				let id = this.$route.path.replace(/[^0-9]/ig, '');
				if (id > _data.length) {
					console.log(id)
				} else {
					this.data = _data[id];
				}
			}
		}
	}
</script>
<style>
	.see h2.txt{border-bottom: .3rem solid #ccc;}
	.see .content{margin-top: 3rem;}
	.see ul{list-style-type: none;}
	.see textarea{width: 100%;}
	.see .question{border-bottom: .1rem solid #ccc;}
</style>