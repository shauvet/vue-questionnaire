
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
			"sub": obj.sub
		})
	}

	add({
		title: "你好",
        timeStart: "2015-1-1",
        timeEnd: "2015-2-2",
        state: "on",
        sub: [{
        	title: '测试标题',
        	option: [
        		"test"
        	]
        }]
	})
	add({
		title: "hello",
		timeStart: "2016-1-1",
		timeEnd: "2016-2-2",
		state: "end"
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