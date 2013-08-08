//针对重复使用的数字, 不断产生新的数值直至都是没有使用过的新数字, 将表格填充满所有的数字
window.onload = initAll;
var usedNums = new Array(76);

function initAll() {

	if(document.getElementById) {	//进行浏览器的脚本兼容性验证
		for(var i = 0; i<24; i++) {
			setSquare(i);
		}
	} else {
		alert("Sorry, your browser doesn't support this script.");
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum;

	do{	//通过循环不断产生新的数字, 直至获取的数字没有重复为止
		newNum = colBasis + getNewNum() + 1;
	} while (usedNums[newNum]) {
		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
	}
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}