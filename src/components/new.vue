<template>
	<div transition="gui" id="new">
		<n_title :text='"请输入标题"'" :class="'new-title'" :iclass="'form-control new-title'"></n_title>
		<div class="content">
			<div class="questions" v-for="t in que">
				<question :index='$index+1' :type='t.type'></question>
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
		</div>
	</div>
</template>
<script>
import n_title from './n_title';
import date from './date';
import question from './question';

	export default {
		data() {
			return {
				n_add_ts: false,
				que: [],
				index: 1
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
			}
		},
		components: {
			question,
			n_title,
			date
		}
	}
</script>
<style>
.n_add_t-transition{transition: height .3s ease;height: 3rem; overflow: hidden;}
.n_add_t-enter, .n_add_t-leave{height: 0; opacity: 0;}

#new span.new-title{display: block; height: 3.4rem; padding-top: .2rem; line-height: 1.5; text-align: center; font-size: 2.4rem;}
#new span.new-title:hover{background-color: #fff;}
#new input.new-title{margin: 0; padding: 0; border: 0; text-align: center; font-size: 2.4rem; border: 0;}

#new .content{margin-top: 1rem; margin-bottom: 1rem; padding: 2rem; border-top: .2rem solid #ccc; border-bottom: .2rem solid #ccc;}
#new .adds{margin-top: 1rem; border: .1rem solid #ccc;}
#new .content .add{height: 8rem; line-height: 8rem; background-color: #ddd; color: #777; font-size: 2.4rem; text-align: center; cursor: pointer;}
#new .content .adds .btns{position: relative; width: 20.5rem; margin: 1rem auto;}
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
</style>