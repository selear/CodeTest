//添加获胜检查函数
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
		document.getElementById(currSquare).className = "";
		document.getElementById(currSquare).onmousedown = toggleColor;
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

function toggleColor(evt) {
	if(evt) {	//获取事件的对象
		var thisSquare = evt.target	//针对非IE浏览器
	} else {
		var thisSquare = window.event.srcElement	//针对IE浏览器
	}

	if(thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	} else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31, 992, 15360, 507904, 541729, 557328, 1083458, 2162820, 4329736, 8519745, 8659472, 16252928);

	for(var i = 0; i < 24; i++) {
		var currSquare = "square" + i;
		if(document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2, i);
		}
	}

	for(var i = 0; i < winners.length; i++) {
		if((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}

	if(winningOption > -1) {
		for(var i = 0; i < 24; i++) {
			if(winners[winningOption] & Math.pow(2, i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}