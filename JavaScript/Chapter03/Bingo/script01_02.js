//探测JavaScript代码能否运行, 探测对象; 通过数组设定数值填充的范围
window.onload = initAll;

function initAll() {

	if(document.getElementById) {
		for(var i = 0; i<24; i++) {
			setSquare(i);
		}
	} else {
		alert("Sorry, your browser doesn't support this script.");
	}
}

function setSquare(thisSquare) {	//成功根据col限制了数字产生的范围, 但是还存在数字重复的问题
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
	var colBasis = colPlace[thisSquare] * 15;
	// var newNum = Math.floor(Math.random() * 75) + 1;
	var newNum = colBasis + Math.floor(Math.random() * 15) + 1;

		document.getElementById(currSquare).innerHTML = newNum;
}