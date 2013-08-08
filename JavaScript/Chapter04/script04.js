window.onload = rolloverInit;

function rolloverInit() {
	for(var i = 0; i < document.links.length; i++) {
		var linkObj = document.links[i];	//获取所有链接对象中的某一个;
		if(linkObj.id) {	//查看该链接对象是否存在id属性
			var imgObj = document.getElementById(linkObj.id + "Img");	//如果链接id存在, 通过该id声称新的图片对象id, 并获取该图片的对象
			if(imgObj) {	//如果图片对象存在, 则执行下面的语句;
				setupRollover(linkObj, imgObj);
			}
		}
	}
}

function setupRollover(thisLink, thisImage) {
	thisLink.imgToChange = thisImage; //随便定义了一个属性imgToChange, 引用了图片对象
	thisLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	thisLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}

	thisLink.outImage = new Image();
	thisLink.outImage.src = thisImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "_on.gif";
}