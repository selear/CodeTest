//通过时间来获取相应的参数
var today = new Date();
/*	定义数组, 存放每个月的天数
	JavaScript之中的getMonth()获取的月份比起实际的数字少1	*/
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


//输入一个日期, 获取本月的日子数量
function getMonthDaysNum(date) {
	/*	获取本月的日子数量
		不需要firstDay, 因为firstDay必定是1	*/
	var lastDay;

	lastDay = days[date.getMonth()];

	return lastDay;
}

function getPrevMonthDaysNum(date) {
	var prevMonth = getPrevMonth(date);
	return days[prevMonth];
}

//根据日期获取当前月份的前一个月的月数
function getPrevMonth(date) {
	var month = date.getMonth();
	(month == 0)? month = 11 : month = month - 1;
	return month;
}

//根据日期获取当前月份的后一个月的月数
function getNextMonth(date) {
	var month = date.getMonth();
	(month == 11)? month = 0 : month = month + 1;
	return month;
}