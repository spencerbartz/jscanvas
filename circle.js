	//Circle class
	function Circle(x, y, radius)
	{
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.height = 2 * this.radius;
		this.width = 2 * this.radius;
	
		// Determine whether point is within circle
		this.containsPoint = function(xCoord, yCoord) {
			if(Math.pow(this.radius, 2) > (Math.pow(xCoord - this.x, 2) + Math.pow(yCoord - this.y, 2))) {
				//console.log("In Circle");
				return true;
			}
			else {
				//console.log("Not In Circle");
				return false;
			}
		};
		
		// FUNCTION: draw( )
		this.draw = function(myCircle, context) {
			context.fillStyle = "#000000";
			context.beginPath();
			context.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2*Math.PI);
			context.fill();
		};
		
		// FUNCTION: animate( )
		this.animate = function(myCircle, canvas, context, startTime, xDirection, yDirection) {
			var self = this;
			
			//Horizontal component
			if(xDirection === "right")
				if(myCircle.x + myCircle.width/2 < canvas.width) {
					myCircle.x++;
					this.x++;
				}
				else 
					xDirection = "left";
			else if(xDirection === "left")
				if(myCircle.x > myCircle.width/2) {
					myCircle.x--;
					this.x--;
				}
				else
					xDirection = "right";
			
			//Vertical component
			if(yDirection === "up")
				if(myCircle.y > myCircle.height/2) {
					myCircle.y--;
					this.y--;
				}
				else
					yDirection = "down";
			else if(yDirection === "down")
				if(myCircle.y + myCircle.height /2 < canvas.height) {
					myCircle.y++;
					this.y++;
				}
				else
					yDirection = "up";
			
			// clear the whole canvas and draw the shape
			context.clearRect(0, 0, canvas.width, canvas.height);
			self.draw(myCircle, context);
			
			// request new frame recursively
			requestAnimFrame(function() {
				self.animate(myCircle, canvas, context, startTime, xDirection, yDirection);
			});
		};
		
		// Set up for animation
		this.startAnimation = function() {
			var canvas = document.getElementById('circle-canvas');
			var context = canvas.getContext('2d');
			
			var myCircle = {
				x: 20,
				y: 100,
				radius: 20,
				height: this.height = 2 * this.radius,
				width: this.width = 2 * this.radius
			};
			
			// draw the shape in initial position, not moving yet
			this.draw(myCircle, context);
			
			// Use old school set time out to delay 1 second before animation begins
			var self = this;
			setTimeout(function() {
				var startTime = (new Date()).getTime();
				self.animate(myCircle, canvas, context, startTime, "right", "up");
			}, 1000);
		};
	}
	
	var circle = new Circle(0, 50, 20);
	var canvas = document.getElementById('circle-canvas');

	//listen for mouse clicks on the canvas
	canvas.addEventListener('click', function(e) {
		var mousePos = getMousePos(canvas, e);
		//console.log(self.containsPoint(mousePos.x, mousePos.y));
		//console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
		
		if(circle.containsPoint(mousePos.x, mousePos.y)) {
			console.log("CLICKED IN THE CIRCLE!");
			//var audio = new Audio('HORRIE!.wav');
			//audio.play();
		}
	});
