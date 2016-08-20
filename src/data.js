
/*
state 表示状态
on 表示发布中，end 表示结束， rel 表示未发布
title 问卷的标题
timeStart 问卷的起始时间
timeEnd 问卷的结束时间
sub 表示题目
*/

if (!window.localStorage.questionnaireData) {
	var data = [];
	function add(obj) {
		data.push({
			"title": obj.title,
			"timeEnd": obj.timeEnd,
			"state": obj.state,
			"que": obj.que
		})
	}

	add({
		title: "js框架使用状况",
        timeEnd: "2016-8-2",
        state: "on",
        que: [{
        	type: 'checkbox',
        	title: '你最常使用的框架或库是什么？',
        	required: false,
        	items: [
        		{
        			title: 'react',
        			num: 21
        		},
        		{
        			title: 'vue',
        			num: 21
        		},
        		{
        			title: 'angular',
        			num: 21
        		},
        		{
        			title: 'jquery',
        			num: 30
        		},
        		{
        			title: 'bootstrap',
        			num: 40
        		}
        	]
        },
        {
        	type: 'radio',
        	title: '你觉得哪个框架或库的学习难度最大？',
        	required: false,
        	items: [
        		{
        			title: 'react',
        			num: 22
        		},
        		{
        			title: 'vue',
        			num: 22
        		},
        		{
        			title: 'angular',
        			num: 22
        		},
        		{
        			title: 'jquery',
        			num: 33
        		},
        		{
        			title: 'bootstrap',
        			num: 44
        		}
        	]
        },{
        	type: 'textarea',
        	title: '说出你为什么喜欢这个框架或库',
        	required: false
        }]
	})

	localStorage.setTime('questionnaireData', JSON.stringify(data));
}

export default {
	out () {
		return JSON.parse(localStorage.getItem('questionnaireData'));
	},
	add (obj) {
		let a = JSON.parse(localStorage.getItem('questionnaireData'));
		a.push(obj);
		localStorage.setItem('questionnaireData', JSON.stringify(a));
	},
	del (index) {
		let a = JSON.parse(localStorage.getItem('questionnaireData'));
		a.splice(index, 1);
		localStorage.setItem('questionnaireData', JSON.stringify(a));
	},
	update (index, data) {
		let a = JSON.parse(localStorage.getItem('questionnaireData'));
		a.splice(index, 1, data);
		localStorage.setItem('questionnaireData', JSON.stringify(a));
	}
}