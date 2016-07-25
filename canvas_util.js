	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {x: evt.clientX - rect.left, y: evt.clientY - rect.top};
	}
	
	//This is the guts of the animation
	window.requestAnimFrame = (function(callback) {
		   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		   function(callback) {
			 window.setTimeout(callback, 1000 / 60);
		   };
   })();