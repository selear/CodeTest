document.onmousemove = moveHandler;
document.onunload = function() {};

function moveHandler(evt) {
	if(!evt) {
		evt = window.event;
	}
	animateEyes(evt.clientX, evt.clientY);
}

function animateEyes(xPos, yPos) {
	
}