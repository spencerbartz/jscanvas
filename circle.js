	var circle = new Circle(100, 100, 40);

	//Circle class
	function Circle(x, y, radius)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
	
		this.getX = function() {
			return this.x;
		};
	
		this.getY = function() {
			return this.y;
		};
	
		this.getRadius = function() {
			return this.radius;
		};
	
		this.containsPoint = function(xCoord, yCoord) {
			if(Math.pow(this.radius, 2) > (Math.pow(xCoord - this.x, 2) + Math.pow(yCoord - this.y, 2))) {
				console.log("In Circle");
				return true;
			}
			else {
				console.log("Not In Circle");
				return false;
			}
		};
		
		// draw circle 
		this.draw = function() {
			var c = document.getElementById("circle-canvas");
			var self = this;
			c.addEventListener('click', function(evt) {
				var mousePos = getMousePos(c, evt);
				console.log(self.containsPoint(mousePos.x, mousePos.y));
				console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
		
				if(this.containsPoint(mousePos.x, mousePos.y)) {
					var audio = new Audio('HORRIE!.wav');
					audio.play();
				}
		
			}, false);
		
			var ctx = c.getContext("2d");
			ctx.fillStyle = "#000000";
			ctx.beginPath();
			ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, 2*Math.PI);
			ctx.fill();
		};
	}