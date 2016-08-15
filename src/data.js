
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
			"timeStart": obj.timeStart,
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

let a = JSON.parse(localStorage.getItem('questionnaireData'));

export default {
	out() {
		return {
			read: a,
			add() {
				data.push({
					"title": obj.title,
					"timeStart": obj.timeStart,
					"timeEnd": obj.timeEnd,
					"state": obj.state
				})
			}
		}
	}
}