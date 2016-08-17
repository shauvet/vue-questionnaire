<template>
	<div class="pop" v-if="on" transition="modal">
		<div class="pop-content">
			<div class="pop-top">
				<h1>警告</h1>
			</div>
			<div class="content">
				{{war}}
			</div>
			<div class="select">
				<button type="button" class="btn btn-primary btn-block" @click="c">
					<span class="glyphicon glyphicon-ok"></span>
					确定
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

		props: {
			on: Boolean,
			war: String
		},
		methods: {
			c: function () {
				this.on = false;
			}
		}
	}
</script>
<style>
	.pop{transition: all .3s ease; z-index: 100; position: fixed; top: 0; left: 0; width: 100%; height: 100%; opacity: .5; overflow: hidden; transform-style: preserve-3d; perspective: 30rem;}
	.pop>div.pop-content{margin: 0; padding: 0; position: fixed; top: 50%; left: 50%; margin-left: -20rem; margin-top: -10rem; width: 40rem; height: 20rem; background-color: #fff; border: .1rem solid #337ab7; border-radius: .4rem; box-shadow: 0 .1rem .1rem rgba(0,0,0,.05); user-select: none;}
	.pop>div.pop-content .pop-top h1{margin: 0; font-size: 2.4rem;}
	.pop>div.pop-content .pop-top{background-color: #337ab7; color: #fff; padding: 1rem 1.5rem; border-bottom: .1rem solid #337a7b; border-top-left-radius: .3rem; border-top-right-radius: .3rem;}
	.pop>div.pop-content .content{line-height: 9rem; text-align: center; font-size: 1.6rem;}
	.pop>div.pop-content .select{width: 8rem; margin: 0 auto;}
	.modal-enter, .modal-leave{opacity: 0; transform: scale(1.1);}
</style>