<template>
	<div class="date">
		<input type="text" class="form-control" placeholder="date" aria-describedby="basic-addon1" @click="datas" v-el:input v-model="date" readonly="readonly">
		<div class="panel panel-primary date-panel" v-show="btn">
			<div class="panel-heading date-panel-head">
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
	let fts = new Array(),
		cts = new Array(),
		ats = new Array(),
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
				date: getToDay(),
				day: Number,
				month: new Date().getMonth() + 1,
				year: new Date().getFullYear(),
				fts: [],
				cts: [],
				ats: []
			}
		},
		methods: {
			add: function (d) {
				if (d == 'y') {
					this.year++;
					this.datas();
				} else {
					if (this.month == 12) {
						this.year++;
						this.month = 1;
						this.datas();
					} else {
						this.month++;
						this.datas();
					}
				}
			},
			subtract: function (d) {
				if (d == 'y') {
					this.year--;
					this.datas();
				} else {
					if (this.month == 1) {
						this.year--;
						this.month = 12;
						this.datas();
					} else {
						this.month--;
						this.datas();
					}
				}
			},
			datas: function () {
				function weeks(y,w,d){
                    var x = new Date(y,w,d).getDay();
                    return x ;
                }
                function days(y,w){
                    var x  = new Date(y,w,0).getDate();
                    return x;
                }
                this.ft = [];
                this.ct = [];
                this.at = [];
				let m = this.month - 1, y = this.year;
				let one = weeks(y, m, 1);
				let front = 0, after = 0;

				m == 0 ? front = days(y - 1, 11) : front = days(y, m);
				m == 11 ? after = days(y + 1, 0) : after = days(y, m + 1);

				if (one != 0) {
					let c = front - one;
					let num = 0;
					for (let i = front; i > c; i--) {
						this.fts[num] = i;
						num++;
					}
					this.fts.reverse();
				}

				for (let i = 0; i < days(this.year, this.month); i++) {
					this.cts[i] = i + 1;
				}

				var lengths = this.fts.length + this.cts.length;
				if (lengths != 42) {
					for (let i = 0; i < 42 - lengths; i++) {
						this.ats[i] i + 1;
					}
				}
				this.btn = true;
			},
			myday: function (day) {
				let now = new Date();
				this.day = day;
				if (this.day >= now.getDate() && this.year >= now.getFullYear() && this.month >= now.getMonth() + 1) {
					this.date = this.year + '-' + this.month + '-' + this.day;
				} else {
					alert('请输入正确的截止日期');
					return false;
				}
				this.btn = false;
				this.dispatch('date', this.date);
			},
			ready: function () {
				this.dispatch('date', this.date);
			}
		}
	}

	function getToDay () {
		 var now = new Date();
		 var year = now.getFullYear(),
		 	 month = now.getMonth() + 1,
		 	 day = now.getDate();
		 return year + '-' + month + '-' + day;
	}
</script>
<style>
	.date{display: inline-block;}
	.date .date-panel{width: 34rem; text-align: center;}
	.date .date-panel-head{font-size: 2.4rem;}
	.date .table ul{padding: 0; margin: 0;}
	.date .table ul li{width: 3rem; height: 3rem; margin: 0.7rem; line-height: 3rem; transition: .3s; text-align: center; cursor: pointer; margin-top: .7rem; font-size: 2rem; display: inline-block;}
	.date .e{padding: 0; margin: 0;}
	.date .e li{width: 3rem; height: 3rem; margin: .7rem; line-height: 4rem; transition: .3s; text-align: center; border-radius: 4rem; cursor: pointer; margin-top: .7rem; font-size: 2rem; display: inline-block;}
	.date .def{color: #ccc;}
	.date .table li.center{border-radius: 2rem;}
	.date .table li.center:hover{background-color: #337ab7; color: #fff;}
	.date .panel{margin-top: 1rem; position: absolute;}
	.date .form-control{width: 20rem; background-color: #fff;}
</style>