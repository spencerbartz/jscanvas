	function getMousePos(canvas, e) {
		//var rect = canvas.getBoundingClientRect();
		//return {x: e.clientX - rect.left, y: e.clientY - rect.top};
		return {x: e.clientX, y: e.clientY};
	}
	
	//This is the guts of the animation
	window.requestAnimFrame = (function(callback) {
		   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		   function(callback) {
			 window.setTimeout(callback, 1000 / 60);
		   };
   })();