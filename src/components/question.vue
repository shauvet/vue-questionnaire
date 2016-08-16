<template>
	<div class="n_radio question" v-if="type=='radio">
		<h4>
			Q{{index}} (单选题)
			<span>
				<n_title :text='"请输入标题"'></n_title>
			</span>
		</h4>
		<ul>
			<template v-for="item in items">
				<li>
					<span class="glyphicon glyphicon-unchecked"></span>
					<n_title :text="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove"></span>
				</li>
			</template>
			<li class="q_add">+</li>
		</ul>
		<div class="required btns">
			<input type="checkbox" name="question"><span>此题是否必填</span>
		</div>
		<div class="fun btns">
			<span>上移</span>
			<span>下移</span>
			<span>复用</span>
			<span>删除</span>
		</div>
	</div>
	<div class="n_checkbox question" v-if="type=='checkbox'">
		<h4>
			Q{{index}} (多选题)
			<span>
				<n_title :text='"请输入标题"'></n_title>
			</span>
		</h4>
		<ul>
			<template v-for="item in items">
				<li>
					<span class="glyphicon glyphicon-record"></span>
					<n_title :text="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove"></span>
				</li>
			</template>
			<li class="q_add">+</li>
		</ul>
		<div class="required btns">
			<input type="checkbox" name="question"><span>此题是否必填</span>
		</div>
		<div class="fun btns">
			<span>上移</span>
			<span>下移</span>
			<span>复用</span>
			<span>删除</span>
		</div>
	</div>
	<div class="n_textarea question" v-if="type=='textarea'">
		<h4>
			Q{{index}} (文本题)
			<span>
				<n_title :text='"请输入标题"'></n_title>
			</span>
		</h4>
		<ul>
			<li><span class="glyphicon glyphicon-align-justify"></span></li>
		</ul>
		<div class="required btns">
			<input type="checkbox" name="question"><span>此题是否必填</span>
		</div>
		<div class="fun btns">
			<span>上移</span>
			<span>下移</span>
			<span>复用</span>
			<span>删除</span>
		</div>
	</div>
</template>
<script>
	import n_title from './n_title';

	export default {
		data () {
			return {
				items: [
					{'title': '问题1'}，
					{'title': '问题2'}
				],
				abc: '123'
			}
		},
		props: {
			index: Number,
			type: String
		},
		components: {
			n_title
		}
	}
</script>
<style>
	.glyphicon-remove{cursor: pointer;}
	.glyphicon-align-justify{font-size: 4.6rem;}
</style>