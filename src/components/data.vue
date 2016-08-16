<template>
	<div class="date">
		<input type="text" class="form-control" placeholder="date" aria-describedby="basic-addon1" @click="datas" v-el:input>
		<div class="panel panel-primary" v-show="btn">
			<div class="panel-heading">
				<span class="glyphicon glyphicon-chevron-left" @click="subtract('y')"></span>
				{{year}}
				<span class="glyphicon glyphicon-chevron-right" @click="add('y')"></span>
				<span class="glyphicon glyphicon-chevron-left" @click="subtract"></span>
				{{week}}
				<span class="glyphicon glyphicon-chevron-right" @click="add"></span>
				<ul class="e">
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
			</div>
			<div class="table">
				<ul>
					<template v-for="ft in fts">
						<li class="def front">{{ft}}</li>
					</template>
					<template v-for="ct in cts">
						<li class="center" @click="myday(ct)" day=>{{ct}}</li>
					</template>
					<template v-for="at in ats">
						<li class="def after">{{at}}</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	let fts = [],
		cts = [],
		ats = [];
	let weeks = function(y, m, d) {
		var r = new Date(y, m, d).getDay();
		return r;
	}
	let days = function(y, m) {
		var r = new Date(y, m, 0).getDate();
		return r;
	}

	export default {
		data () {
			return {
				btn: false,
				day: Number,
				month: new Date().getMonth() + 1,
				year: new Date().getFullYear(),
				fts: [],
				cts: [],
				ats: []
			}
		},
		methods: {
			add: function(d) {
				if (d == 'y') {
					this.year++;
				} else {
					if (this.month == 12) {
						this.year++;
						this.month = 1;
					} else {
						this.month++;
					}
				}
			},
			subtract: function(d) {
				if (d == 'y') {
					this.year--;
				} else {
					if (this.month == 1) {
						this.year--;
						this.month = 12;
					} else {
						this.month--;
					}
				}
			},
			datas: function() {
				
			}
		}
	}
</script>