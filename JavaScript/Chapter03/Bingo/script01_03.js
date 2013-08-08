//检测重复使用的数字, 并在表格中留空
window.onload = initAll;
var usedNums = new Array(76);

function initAll() {

	if(document.getElementById) {
		for(var i = 0; i<24; i++) {
			setSquare(i);
		}
	} else {
		alert("Sorry, your browser doesn't support this script.");
	}
}

function setSquare(thisSquare) {	//解决了数字重复的问题, 但如果产生了重复的数字, 会留下空的表格
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum = colBasis + getNewNum() + 1;

	if(!usedNums[newNum]) {
		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
	}
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}