<template>
	<div transition="gui" id="new">
		<n_title :text.sync="text" :class="'new-title'" :iclass="'form-control new-title'"></n_title>
		<div class="content">
			<div class="questions" v-for="t in que">
				<question :index='$index+1' :type='t.type' v-ref:sss></question>
			</div>
			<div class="adds">
				<div class="btns" v-show="n_add_ts" transition="n_add_t">
					<button class="btn btn-default btn-sm" @click="radio">
						<span class="glyphicon glyphicon-ok" aria-hidden="true">单选</span>
					</button>
					<button class="btn btn-default btn-sm" @click="checkbox">
						<span class="glyphicon glyphicon-th-list" aria-hidden="true">多选</span>
					</button>
					<button class="btn btn-default btn-sm" @click="textarea">
						<span class="glyphicon glyphicon-align-left" aria-hidden="true">文本题</span>
					</button>
				</div>
				<div class="add" @click="n_add_t_c">+ 添加问题</div>
			</div>
		</div>
		<div class="footer">
			<date></date>
			<div class="btns">
				<button class="btn btn-default btn-sm" type="button" @click="mes">保存问卷</button>
				<button class="btn btn-default btn-sm" type="button" @click="check">提交问卷</button>
			</div>
		</div>
		<pop :on.sync="btn" :war="warning"></pop>
	</div>
</template>
<script>
import n_title from './n_title';
import pop from './pops';
import date from './date';
import question from './question';

	export default {
		data() {
			return {
				text: '请输入标题',
				n_add_ts: false,
				que: [],
				data: [],
				date: '',
				index: 1,
				btn: false,
				warning: '!'
			}
		},
		methods: {
			n_add_t_c: function () {
				this.n_add_ts = true;
			},
			radio: function () {
				this.que.push({'type': 'radio'});
				this.n_add_ts = false;
			},
			checkbox: function () {
				this.que.push({'type': 'checkbox'});
				this.n_add_ts = false;
			},
			textarea: function () {
				this.que.push({'type': 'textarea'});
				this.n_add_ts = false;
			},
			mes: function () {
				this.data = [];
				for (let i = 0; i < this.$children.length; i++) {
					if (/question/.test(this.$children[i].$el.className)) {
						let me = {};
						me.h1 = this.$children[i].h1;
						me.items = this.$children[i].items;
						me.required = this.$children[i].required;
						this.data.push(me);
					}
				}
			},
			c: function () {
				this.btn = true;
			},
			check: function () {
				this.mes();
				for (let i = 0; i < this.data.length; i++) {
					if (this.data[i].h1 == '请输入标题') {
						this.warning = '请输入问题' + (i + 1) + '的标题';
						this.btn = true;
					} else if (this.data[i].items.length <= 1) {
						this.warning = '每个问题至少两个';
						this.btn = true;
					}
				}
			}
		},
		components: {
			question,
			n_title,
			date,
			pop
		}
	}
</script>
<style>
.n_add_t-transition{transition: height .3s ease;height: 3rem; overflow: hidden;}
.n_add_t-enter, .n_add_t-leave{height: 0; opacity: 0;}

#new span.new-title{display: block; height: 3.4rem; padding-top: .2rem; line-height: 1.5; text-align: center; font-size: 2.4rem;}
#new span.new-title:hover{background-color: #fff;}
#new input.new-title{margin: 0; padding: 0; border: 0; text-align: center; font-size: 2.4rem; border: 0;}

#new>.content{margin-top: 1rem; margin-bottom: 1rem; padding: 2rem; border-top: .2rem solid #ccc; border-bottom: .2rem solid #ccc;}
#new .adds{margin-top: 1rem; border: .1rem solid #ccc;}
#new .content .add{height: 8rem; line-height: 8rem; background-color: #ddd; color: #777; font-size: 2.4rem; text-align: center; cursor: pointer;}
#new .content .adds .btns{position: relative; width: 20.5rem; margin: 1rem auto;}
#new .footer .btns{float: right;}
</style>