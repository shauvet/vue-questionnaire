<template>
	<div transition="gui" id="new">
		<n_title :text="'请输入标题'" :class="'new-title'" :iclass="'form-control new-title'"></n_title>
		<div class="content">
			<div class="question">
				<div class="n_radio question">
					<h4>
						Q1
						<span>
							<n_title :text="'请输入问题'" :class="''" :iclass="''"></n_title>	
						</span>
					</h4>
					<ul>
						<li>
							<input type="radio" name="q1"><n_title :text="选择一" :class="''" :iclass="''">
						</li>
						<li>
							<input type="radio" name="q1"><n_title :text="选择二" :class="''" :iclass="''">
						</li>
					</ul>
					<div class="required btns">
						<input type="checkbox" name="question"><span>此题是否必选</span>
					</div>
					<div class="fun btns">
						<span>上移</span>
						<span>下移</span>
						<span>复用</span>
						<span>删除</span>
					</div>
					
				</div>
				<div>
					<h4>Q2 多选题</h4>
					<ul>
						<li><input type="checkbox" name="q2">选择一</li>
						<li><input type="checkbox" name="q2">选择二</li>
					</ul>
				</div>
				<div>
					<h4>Q3 文本题</h4>
					<ul>
						<li><textarea name="q3" id="" cols="30" rows="10"></textarea></li>
					</ul>
				</div>
			</div>
			<div class="adds">
				<div class="btns" v-show="n_add_t" transition="n_add_t">
					<button class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-ok" aria-hidden="true">单选</span>
					</button>
					<button class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-th-list" aria-hidden="true">多选</span>
					</button>
					<button class="btn btn-default btn-sm">
						<span class="glyphicon glyphicon-align-left" aria-hidden="true">文本题</span>
					</button>
				</div>
				<div class="add" @click="n_add_t_c">+ 添加问题</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				n_btn: true,
				n_add_t: false
			}
		},
		methods: {
			me: function() {
				this.n_btn: false
			},
			mes: function(e) {
				let el = e.currentTarget;
				this.n_btn = true;
				el.select();
			},
			n_add_t_c: function() {
				this.n_add_t = true;
			}
		},
		components: {
			n_title: {
				props: {
					text: String,
					editing: Boolean,
					class: String,
					iclass: String
				},
				template: 
					'<span class="{{class}}" v-if="!editing" @click="edit">{{text}}</span>' + 
					'<input type="text" class="iclass" v-el:input v-if="editing" @blur="blur" v-model="text"/>',
				methods: {
					edit: function() {
						this.editing = true;
						//dom有变化立即执行
						this.$nextTick(function() {
							this.$els.input.select();
						})
					},
					blur: function() {
						let ntext = this.text;
						this.editing = false;
						if (this.text == '') {
							this.text = ntext;
						}
					}
				}
			},
			n_add_q: {
				props: {
					text: String,
					editing: Boolean,
					class: String,
					iclass: String
				},
				template: 
					'<div class="n_radio question">' +
						'<h4>Q1' +
							'<span><n_title :text="'请输入问题'" class="''" iclass="''"></n_title></span>'
						'</h4>' +
						'<ul>' + 
							'<li><input type="radio" name="q1" /><n_title :text="'选项一'" class="''" iclass="''"></n_title></li>' + 
							'<li><input type="radio" name="q1" /><n_title :text="'选项二'" class="''" iclass="''"></n_title></li>' +
							'<li class="q_add">+</li>'
						'</ul>' +
						'<div class="required btns">' +
							'<input type="checkbox" name="question" /><span>此题是否必选</span>' +
						'</div>' +
						'<div class="fun btns">' +
							'<span>上移</span>' +
							'<span>下移</span>' +
							'<span>复用</span>' +
							'<span>删除</span>' +
						'</div>' +
					'</div>'
			}
		}
	}
</script>
<style>
.n_add_t-transition{transition: all .3s ease;height: 3rem; overflow: hidden;}
.n_add_t-enter, .n_add_t-leave{height: 0; opacity: 0;}

#new span.new-title{display: block; height: 3.4rem; padding-top: .2rem; line-height: 1.5; text-align: center; font-size: 2.4rem;}
#new span.new-title:hover{background-color: #fff;}
#new input.new-title{margin: 0; padding: 0; border: 0; text-align: center; font-size: 2.4rem; border: 0;}

#new .content{margin-top: 1rem; margin-bottom: 1rem; padding: 2rem; border-top: .2rem solid #ccc; border-bottom: .2rem solid #ccc;}
#new .adds{margin-top: 1rem; border: .1rem solid #ccc;}
#new .content .add{height: 8rem; line-height: 8rem; background-color: #ddd; color: #777; font-size: 2.4rem; text-align: center; cursor: pointer;}
#new .content .adds .btns{position: relative; width: 20.5rem; margin: 1rem auto;}
#new .content .questions>div{transition: .3s all; position: relative; padding: 1rem;}
#new .content .questions>div:hover{background-color: #dedede;}
#new .content .questions ul{padding-left: 3rem;}
#new .content .questions li.q_add{transition: .2s; cursor: pointer; text-align: center; font-size: 1.8rem; border: .2rem dashed #ccc; box-shadow: 1rem; border-radius: .2rem; opacity: 0;}
#new .content .questions li.q_add:hover{opacity: 1;}
#new .content .questions input{margin-right: .5rem;}
#new .content .questions textarea{width: 100%;}
#new .content .questions .required{position: absolute; top: .5rem; right: 1rem; height: 0; font-size: 1rem;}
#new .content .questions .fun{position: absolute; bottom: 2rem; right: 1rem; height: 0; font-size: 1rem;}
#new .content .questions .question h4{height: 2rem;}
#new .content .questions .question input{width: auto; border: 0;}
</style>