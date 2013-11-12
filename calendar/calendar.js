var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var workdays = "一二三四五六日";

//var firstDay = new Date(2013, 7, 1);
//var lastDay = new Date(2013, 8, 0);

window.onload = createCalendar;

function createCalendar() {
	//在标题位置插入日期
	insertDate("date");

	//构建整个日历
	constructCalendar("calendar", "days");

	function insertDate(objId) {

		//获取今天日期信息
		var today = new Date();
		var year = today.getFullYear();
		var month = today.getMonth();
		var day = today.getDate();

		/* console.log("FullYear : " + today.getFullYear()); //直接得出当年年份
		console.log("Year : " + today.getYear()); //从1900年开始计算
		console.log("Month : " + today.getMonth()); //获取当前月份, 比实际值要小1
		console.log("Date : " + today.getDate()); //获取当前日期
		console.log("Day : " + today.getDay()); //获取当前星期几 */

		var daysInMonth = days[month];
		var dateStr = year + "年" + (month + 1) + "月" + day + "日 星期" + workdays.charAt(today.getDay() - 1);
		console.log(dateStr);

		//创建文字节点, 同时获取dateObj的对象, 将文字节点插入到对象当中
		var content = document.createTextNode(dateStr); //document.createTextNode(#string#)属于标准的字符串
		var dateObj = document.getElementById(objId);
		dateObj.appendChild(content);
	}

	function constructCalendar(weekId, daysId) {
		var weekObj = document.getElementById(weekId);
		var daysObj = document.getElementById(daysId);

		//填充week
		

		//填充days
	}
}