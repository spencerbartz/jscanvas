	var rectangle = new Rectangle(100, 100, 100, 100);
	
	//Rectangle class
	function Rectangle(x, y, width, height)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.direction = "right";
		
		this.draw = function(myRectangle, context) {
			context.beginPath();
			context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
			context.fillStyle = '#8ED6FF';
			context.fill();
			context.lineWidth = myRectangle.borderWidth;
			context.strokeStyle = 'black';
			context.stroke();
		};
		
		this.animate = function(myRectangle, canvas, context, startTime, direction) {
			var self = this;
			
			if(direction === "right") {
				if(myRectangle.x + myRectangle.width < canvas.width) {
					myRectangle.x++;
				}
				else {
					direction = "left";
				}
			}
			else if(direction === "left") {
				if(myRectangle.x > 0) {
					myRectangle.x--;
				}
				else {
					direction = "right";
				}
			}
			// clear the whole canvas and draw the rectangle
			context.clearRect(0, 0, canvas.width, canvas.height);
			rectangle.draw(myRectangle, context);
			
			// request new frame recursively
			requestAnimFrame(function() {
				self.animate(myRectangle, canvas, context, startTime, direction);
			});
		};
	}
	
	function startAnimation() {
		var canvas = document.getElementById('rectangle-canvas');
		var context = canvas.getContext('2d');
		
		var myRectangle = {
			x: 0,
			y: 75,
			width: 100,
			height: 50,
			borderWidth: 5
		};
		
		// draw the rectangle in its initial position, not moving yet
		rectangle.draw(myRectangle, context);
		
		// Use old school set time out to delay 1 second before animation begins
		setTimeout(function() {
			var startTime = (new Date()).getTime();
			rectangle.animate(myRectangle, canvas, context, startTime, "right");
		}, 1000);
	}
	
	
