if (!window.localStorage.questionnaireData) {
	var data = [];
	function add(obj) {
		data.push({
			"title": obj.title,
			"timeStart": obj.timeStart,
			"timeEnd": obj.timeEnd,
			"state": obj.state
		})
	}

	add({
		title:"你好",
        timeStart:"2015-1-1",
        timeEnd:"2015-2-2",
        state:true
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