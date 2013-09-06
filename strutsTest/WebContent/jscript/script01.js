window.onload = initAll;

function initAll() {
	var allButtons = document.getElementsByTagName("input"); // 获取所有<input>的对象
	for ( var i = 0; i < allButtons.length; i++) {
		var temp = allButtons[i];
		if (temp.type == "button") { // 对每一个input进行类型验证, 如果点击的不是按钮, 不触发函数;	如果不编写该代码, 则所有的input元素, 包括输入框等均会触发该脚本, 不符合设计目的
			temp.onclick = setAction;
		}
	}
}

function setAction() {
	var curForm = document.forms[0];
	curForm.action = this.name + "Action";
	alert("curForm.action: " + curForm.action);
	console.log(curForm.action);
	curForm.submit();
}