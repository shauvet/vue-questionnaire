<template>
	<span class="{{class}}" v-if="!editing" @click="edit">{{text}}</span>
	<input type="text" class="{{iclass}}" v-el:input v-if="editing" @blur="blur" v-model="text">
</template>
<script>
	export default {
		data() {
			return :{
				n_btn: true,
				n_add_t: false
			}
		},
		props: ['text', 'editing', 'class', 'iclass'],
		methods: {
			blur: function () {
				let ntext = this.text;
				this.editing = false;
				if (this.text == '') {
					this.text = ntext;
				}
			},
			edit: function () {
				this.editing = true;
				this.$nextTick(function () {
					this.$els.input.select();
				}) 
			}
		}
	}
</script>