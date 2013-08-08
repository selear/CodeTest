window.onload = initAll;		//事物进行初始化
//window.onpageshow = initAll;
window.onunload = function(){}	//针对部分浏览器, 使得后退按钮可以使用

function initAll() {
	document.getElementById("newLocation").selectedIndex = 0;	//直接定义下拉列表初始选项
	document.getElementById("newLocation").onchange = jumpPage;	//当选项发生变化之后, 调用页面跳转的函数
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");		//获取当前select标签的对象
	var newPage = newLoc.options[newLoc.selectedIndex].value;	//获取select标签对象中选择的项目

	if(newPage != "") {											//因为初始化的选项本身没有value值, 不需要进行跳转
		window.location = newPage;								//验证通过之后进行跳转
	}
}