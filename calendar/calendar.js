var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var firstDay = new Date(2013, 7, 1);
var lastDay = new Date(2013, 8, 0);

window.onload = function() {
	var today = new Date();

	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDay();

	console.log("FullYear : " + today.getFullYear());
	console.log("Year : " + today.getYear());
	console.log("Month : " + today.getMonth());
	console.log("Date : " + today.getDate());
	console.log("Day : " + today.getDay());

	var daysInMonth = days[month];
	var dateStr = year + "年" + month + "月" + day + "日";
	console.log(dateStr);

	var title = document.getElementById("date");
	var content = document.createTextNode(dateStr); //document.createTextNode(#string#)属于标准的字符串
	title.appendChild(content);

	var calendar = document.getElementById("calendar");

}