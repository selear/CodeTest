//利用循环向表格中填充数值, 但每一列的数据没有范围规定, 并存在重复的数字
window.onload = initAll;

function initAll() {

	for (var i = 0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var newNum = Math.floor(Math.random() * 75) + 1;

	document.getElementById(currSquare).innerHTML = newNum;
}