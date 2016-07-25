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
			
			if(direction === "right") 
				if(myRectangle.x + myRectangle.width < canvas.width) 
					myRectangle.x++;
				else 
					direction = "left";
			else if(direction === "left") {
				if(myRectangle.x > 0) 
					myRectangle.x--;
				else 
					direction = "right";
			}
			// clear the whole canvas and draw the rectangle
			context.clearRect(0, 0, canvas.width, canvas.height);
			self.draw(myRectangle, context);
			
			// request new frame recursively
			requestAnimFrame(function() {
				self.animate(myRectangle, canvas, context, startTime, direction);
			});
		};
		
		this.startAnimation = function() {
			var canvas = document.getElementById('rectangle-canvas');
			var context = canvas.getContext('2d');
			var self = this;
			var myRectangle = {
				x: 0,
				y: canvas.height - 50,
				width: 100,
				height: 25,
				borderWidth: 3
			};
			
			// draw the rectangle in its initial position, not moving yet
			this.draw(myRectangle, context);
			
			// Use old school set time out to delay 1 second before animation begins
			setTimeout(function() {
				var startTime = (new Date()).getTime();
				self.animate(myRectangle, canvas, context, startTime, "right");
			}, 1000);
		};
	}
