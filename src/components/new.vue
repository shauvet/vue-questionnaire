<template>
	<div transition="gui" id="new">
		<n_title :text.sync="text" :class="'new-title'" :iclass="'form-control new-title'"></n_title>
		<div class="content">
			<div class="questions" v-for="t in que">
				<question :index='$index+1' :que.sync="t" :max="que.length"></question>
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
				<button class="btn btn-default btn-sm" type="button" @click="add">保存问卷</button>
				<button class="btn btn-default btn-sm" type="button" @click="check">提交问卷</button>
			</div>
		</div>
		<pop :on.sync="btn" :war="warning"></pop>
	</div>
</template>
<script>
import datas from '../data';
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
				date: '',
				btn: false,
				warning: '!'
			}
		},
		methods: {
			n_add_t_c: function () {
				this.n_add_ts = true;
			},
			radio: function () {
				this.que.push({
					'type': 'radio',
					'title': '请输入标题',
					'required': false,
					'items': []
				})
				this.n_add_ts = false;
			},
			checkbox: function () {
				this.que.push({
					'type': 'checkbox',
					'title': '请输入标题',
					'required': false,
					'items': []
				});
				this.n_add_ts = false;
			},
			textarea: function () {
				this.que.push({
					'type': 'textarea',
					'title': '请输入标题',
					'required': false
				});
				this.n_add_ts = false;
			},
			add: function () {
				let _data = {};
				_data.state = 'rel';
				_data.timeEnd = this.date;
				_data.title = this.text;
				_data.que = this.que;
				datas.add(_data);
				this.$router.go('/list');
			},
			deep: function (index) {
				let j = {},
					p = [];
				j.title = this.que[index].title;
				j.type = this.que[index].type;
				j.require = false;
				for (let i = 0; i < this.que[index].items.length; i++) {
					p.push({'title': this.que[index].items[i].title})
				}
				j.items = p;
				return j;
			}
			check: function () {
				var que = this.data.que;
				if (que.length == 0) {
					this.warning = '至少添加一个问题';
					this.btn = true;
					return false;
				}
				for (let i = 0; i < que.length; i++) {
					if (que[i].title == '请输入标题' || que[i].title == '请重新填写') {
						this.warning = '请输入问题' + (i + 1) + '的标题';
						this.btn = true;
						return false;
					} else if (que[i].items) {

						if (que[i].items.length <= 1) {
							this.warning = '每个问题至少两个选项';
							this.btn = true;
							return false;
						} else if (que[i].items.length >= 2) {
							for (let j = 0; j < que[i].items.length; j++) {
								if (que[i].items[j] === '请重新填写') {
									this.warning = '请重新输入第' + (i + 1) + '问题的第' + (j + 1) + '个选项';
									this.btn = true;
									return false;
								}
							}
						}
					}
				}
				let _data = {};
				_data.state = 'on';
				_data.timeEnd = this.date;
				_date.title = this.text;
				_data.que = this.que;
				datas.add(_data);
				this.$router.go('list');
			}
		},
		events: {
			overlap: function (index) {
				var j = this.deep(index-1);
				this.que.push(j);
			},
			moveDown: function (index) {
				let a = this.deep(index-1);
				let b = this.deep(index);
				this.que.splice(index-1, 1);
				this.que.splice(index, 1, a);
			},
			moveUp: function (index) {
				let a = this.deep(index-2);
				let b = this.deep(index-1);
				this.que.splice(index-2, 1);
				this.que.splice(index, -1, a);
			},
			del: function (index) {
				this.que.splice(index-1, 1);
			},
			date: function (date) {
				this.date = date;
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
#new .content .adds .btns{position: relative; width: 22rem; margin: 1rem auto;}
#new .footer .btns{float: right;}
</style>