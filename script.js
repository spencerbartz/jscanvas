
var Q;
var circle = new Circle(100, 100, 40);

function draw()
{
	/*
	var c = document.getElementById("mycanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,150,75);
*/



	var c = document.getElementById("mycanvas");

	c.addEventListener('click', function(evt)
	{
        var mousePos = getMousePos(c, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(circle.containsPoint(mousePos.x, mousePos.y));
        console.log(message);

        if(circle.containsPoint(mousePos.x, mousePos.y))
        {
			var audio = new Audio('HORRIE!.wav');
			audio.play();
		}

      }, false);

	var ctx = c.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, 2*Math.PI);
	ctx.fill();

	/*
	console.log(circle.containsPoint(100, 100));
	ctx.strokeStyle = "#FF0000";
	ctx.moveTo(100,100);
	ctx.lineTo(102,102);
	ctx.stroke();

	console.log(circle.containsPoint(41, 41));
	ctx.moveTo(41,41);
	ctx.lineTo(42,42);
	ctx.stroke();
	*/
}

//Circle class
function Circle(x, y, radius)
{
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.getX = function()
	{
		return this.x;
	}

	this.getY = function()
	{
		return this.y;
	}

	this.getRadius = function()
	{
		return this.radius;
	}

	this.containsPoint = function(xCoord, yCoord)
	{
		if(Math.pow(this.radius, 2) > (Math.pow(xCoord - this.x, 2) + Math.pow(yCoord - this.y, 2)))
		{
			console.log("In Circle");
			return true;
		}
		else
		{
			console.log("Not In Circle");
			return false;
		}
	}
}

function getMousePos(canvas, evt)
{
	var rect = canvas.getBoundingClientRect();
	return {x: evt.clientX - rect.left, y: evt.clientY - rect.top};
}

 window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      function drawRectangle(myRectangle, context) {
        context.beginPath();
        context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = myRectangle.borderWidth;
        context.strokeStyle = 'black';
        context.stroke();
      }
	function animate(myRectangle, canvas, context, startTime)
	{
        // update
        var time = (new Date()).getTime() - startTime;

        var linearSpeed = 100;
        // pixels / second
        var newX = linearSpeed * time / 1000;

        if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
          myRectangle.x = newX;
        }

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawRectangle(myRectangle, context);

        // request new frame
        requestAnimFrame(function() {
          animate(myRectangle, canvas, context, startTime);
        });
	}
function startAnimation()
{
   var canvas = document.getElementById('myCanvas');
   var context = canvas.getContext('2d');

      var myRectangle = {
        x: 0,
        y: 75,
        width: 100,
        height: 50,
        borderWidth: 5
      };

      drawRectangle(myRectangle, context);

      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRectangle, canvas, context, startTime);
      }, 1000);
}