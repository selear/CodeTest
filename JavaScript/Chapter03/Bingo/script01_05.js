//直接调用本地脚本, 同时重置使用过的数字, 对整个表格重新进行填充
window.onload = initAll;
var usedNums = new Array(76);

function initAll() {

	if (document.getElementById) { //进行浏览器的脚本兼容性验证
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	} else {
		alert("Sorry, your browser doesn't support this script.");
	}
}

function newCard() {
	for (var i = 0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum;

	do { //通过循环不断产生新的数字, 直至获取的数字没有重复为止
		newNum = colBasis + getNewNum() + 1;
	} while (usedNums[newNum]) {
		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
	}
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}

function anotherCard() {
	for(var i = 1; i < usedNums.length; i++) {
		usedNums[i] = false;
	}
	newCard();
	return false;	//停止针对该鼠标点击的运行	//针对事件一定要说明是否继续运行下去// 在这里不加载连接指定的页面
}