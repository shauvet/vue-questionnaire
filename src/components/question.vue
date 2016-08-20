<template>
	<div class="n_radio question" @mouseover="open" @mouseout="close">
		<h4>
			<template v-if="que.type=='radio'">
				Q{{index}} (单选题)
			</template>
			<template v-if="que.type=='checkbox'">
				Q{{index}} (多选题)
			</template>
			<template v-if="que.type=='textarea'">
				Q{{index}} (文本题)
			</template>
			<span>
				<n_title :text.sync="que.title"></n_title>
			</span>
		</h4>
		<ul>
			<template v-for="item in que.items" v-if="que.type=='radio'">
				<li>
					<span class="glyphicon glyphicon-unchecked"></span>
					<n_title :text.sync="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove" @click="pr_del($index)"></span>
				</li>
			</template>
			<template v-for="item in que.items" v-if="que.type=='checkbox'">
				<li>
					<span class="glyphicon glyphicon-record"></span>
					<n_title :text.sync="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove" @click="pr_del($index)"></span>
				</li>
			</template>
			<template v-if="que.type=='textarea'">
				<li><span class="glyphicon glyphicon-align-justify"></span></li>
			</template>
			<li class="q_add" @click="pr_add" v-if="que.type=='radio' || que.type=='checkbox'">+</li>
		</ul>
		<div class="required btns">
			<input type="checkbox" name="required" v-model="que.required" :true="true" :false="false"><span>此题是否必填</span>
		</div>
		<div class="fun btns" v-show="btn">
			<span @click="moveUp" v-show="index!=1">上移</span>
			<span @click="moveDown" v-show="on()">下移</span>
			<span @click="overlap">复用</span>
			<span @click="del">删除</span>
		</div>
	</div>
</template>
<script>
	import n_title from './n_title';

	export default {
		data () {
			return {
				items: [],
				btn: false,
				if_move:false
			}
		},
		props: {
			que: Object,
			index: Number,
			type: String,
			max: Number
		},
		components: {
			n_title
		},
		methods: {
			pr_add: function () {
				this.que.items.push({'title': '问题', 'num': 0});
			},
			pr_del: function (index) {
				this.que.items.splice(index, 1);
			},
			overlap: function () {
				this.$dispatch('overlap', this.index);
			},
			moveDown: function () {
				this.$dispatch('moveDown', this.index);
			},
			moveUp: function () {
				this.$dispatch('moveUp', this.index);
			},
			del: function () {
				this.$dispatch('del', this.index);
			},
			open: function () {
				this.btn = true;
			},
			close: function () {
				this.btn = false;
			},
			on: function () {
				if (this.max == this.index) {
					return false;
				} else {
					return true;
				}
			}
		}
	}
</script>
<style>
.glyphicon-remove{cursor: pointer;}
.glyphicon-align-justify{font-size: 4.6rem;}

.content .questions>div.question{transition: .3s all; position: relative; padding: 1rem;}
.content .questions>div.question:hover{background-color: #dedede;}
.content .questions ul{padding-left: 3rem;}
.content .questions li.q_add{cursor: pointer; text-align: center; font-size: 1.8rem; border: .2rem dashed #ccc; box-shadow: 1rem; border-radius: .2rem; opacity: 0;}
.content .questions li.q_add:hover{opacity: 1;}
.content .questions input{margin-right: .5rem;}
.content .questions textarea{width: 100%;}
.content .questions .required{position: absolute; top: .5rem; right: 1rem; height: 0; font-size: 1rem;}
.content .questions .fun{position: absolute; bottom: 2rem; right: 1rem; height: 0; font-size: 1rem;}
.content .questions .question h4{height: 2rem;}
.content .questions .question input{width: auto; border: 0;}
.content .questions>div.question>div.fun span{cursor: pointer;}
</style>