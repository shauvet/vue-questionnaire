<template>
	<div class="n_radio question">
		<h4>
		{{title}}
			<template v-if="type=='radio'">
				Q{{index}} (单选题)
			</template>
			<template v-if="type=='checkbox'">
				Q{{index}} (多选题)
			</template>
			<template v-if="type=='textarea'">
				Q{{index}} (文本题)
			</template>
			<span>
				<n_title :text.sync="title"></n_title>
			</span>
		</h4>
		<ul>
			<template v-for="item in items" v-if="type=='radio'">
				<li>
					<span class="glyphicon glyphicon-unchecked"></span>
					<n_title :text.sync="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove" @click="pr_del($index)"></span>
				</li>
			</template>
			<template v-for="item in items" v-if="type=='checkbox'">
				<li>
					<span class="glyphicon glyphicon-record"></span>
					<n_title :text.sync="item.title" :class="''" :iclass="''"></n_title>
					<span class="glyphicon glyphicon-remove" @click="pr_del($index)"></span>
				</li>
			</template>
			<template v-for="item in items" v-if="type=='textarea'">
				<li><span class="glyphicon glyphicon-align-justify"></span></li>
			</template>
			<li class="q_add" @click="pr_add" v-if="type=='radio' || type=='checkbox'">+</li>
		</ul>
		<div class="required btns">
			<input type="checkbox" name="required" v-model="required" :true="true" :false="false"><span>此题是否必填</span>
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
				title: 'abs',
				items: [],
				required: false
			}
		},
		props: {
			index: Number,
			type: String,
			data: Array,
			me: Object
		},
		components: {
			n_title
		},
		methods: {
			pr_add: function () {
				this.items.push({'title': '问题'});
			},
			pr_del: function (index) {
				this.items.splice(index, 1);
			}
		},
		ready: function () {
			this.me['title'] = this.title;
			this.me['items'] = this.items;
			this.me['type'] = this.type;
			this.me['required'] = this.required;
		}
	}
</script>
<style>
.glyphicon-remove{cursor: pointer;}
.glyphicon-align-justify{font-size: 4.6rem;}

#new .content .questions>div.question{transition: .3s all; position: relative; padding: 1rem;}
#new .content .questions>div.question:hover{background-color: #dedede;}
#new .content .questions ul{padding-left: 3rem;}
#new .content .questions li.q_add{cursor: pointer; text-align: center; font-size: 1.8rem; border: .2rem dashed #ccc; box-shadow: 1rem; border-radius: .2rem; opacity: 0;}
#new .content .questions li.q_add:hover{opacity: 1;}
#new .content .questions input{margin-right: .5rem;}
#new .content .questions textarea{width: 100%;}
#new .content .questions .required{position: absolute; top: .5rem; right: 1rem; height: 0; font-size: 1rem;}
#new .content .questions .fun{position: absolute; bottom: 2rem; right: 1rem; height: 0; font-size: 1rem;}
#new .content .questions .question h4{height: 2rem;}
#new .content .questions .question input{width: auto; border: 0;}
#new .content .questions>div.question>div.fun span{cursor: pointer;}
</style>