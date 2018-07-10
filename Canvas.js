// JavaScript source code
var canvas = document.querySelector('canvas');//we are going to be looking for the html element canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');//we wound draw within this variable c
/*
//Drawing on the canvas
//1.creating a rectangle pattern
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(0, 0, 100, 100);
c.fillRect(0, 200, 100, 100);
c.fillRect(200, 0, 100, 100);
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
*//*
//2.Drawing a line
c.beginPath();
c.moveTo(100,200);
c.lineTo(200,100);
c.lineTo(300,200);
c.lineTo(100,200);
c.strokeStyle = "blue";
c.stroke();
*//*
//3.Drawing an arc
c.beginPath();
c.arc(300,300,30,0,Math.PI/2,false);
c.stroke();
console.log('Canvas');
*/
//Moving Circle
/*
var x = innerWidth*Math.random();
var y = innerHeight*Math.random();
var rad = 30;
var dx = 5;
var dy = 5;
function anim_ball(){
	requestAnimationFrame(anim_ball);//Refreshes the page
	c.clearRect(0,0,innerWidth,innerHeight);
	c.beginPath();
	c.fillStyle = "rgba(0, 255, 0, 0.5)";
	c.arc(x,y,rad,0,Math.PI*2,false);
	c.stroke();
	if (x>innerWidth-rad || x<rad){
		dx = -dx;
	}
	if (y>innerHeight-rad || y<rad){
		dy = -dy;
	}
		x += dx
		y += dy
}
anim_ball();
*/
var mouse = {
	x: undefined,
	y: undefined
}
var colorArray = [
				'rgba(0, 255, 255, 0.75)',
				'rgba(255, 255, 0, 0.75)',
				'rgba(255, 0, 255, 0.75)',
				'rgba(128, 0, 128, 0.75)',
				'rgba(40, 180, 99, 0.75)',
				'rgba(244, 208, 63, 0.75)',
				'rgba(189, 195, 199, 0.75)',
				'rgba(52, 152, 219, 0.75)',
				'rgba(245, 176, 65, 0.75)',
				'rgba(255, 255, 255,0.75)'
				];
window.addEventListener('mousemove',
	function(event){//event argument returns the events performed by the mouse
		mouse.x = event.x;
		mouse.y = event.y;
		
});

function Circles(x,y,dx,dy){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.rad = Math.floor(Math.random()*20)+5;
	this.minRad = this.rad;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	
	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.rad,0,Math.PI*2,false);
		c.fillStyle = this.color;
		c.fill();	
	}
	this.update = function(){
		if (this.x>innerWidth-this.rad || this.x<this.rad){
		this.dx = -this.dx;
	}
	if (this.y>innerHeight-this.rad || this.y<this.rad){
		this.dy = -this.dy;
	}
		this.x += this.dx;
		this.y += this.dy;
		if(mouse.x - this.x<50 && mouse.x - this.x>-50 && mouse.y - this.y<50 && mouse.y - this.y>-50){
			if(this.rad < 50){
				this.rad +=5;
			}
		}else if(this.rad >=this.minRad){
			this.rad -=1;
		}
		this.draw();
	}
}
var circleArrey = [];

for(var i = 0;i < 500; i++){
	var rad = 30;
	var x = Math.floor(Math.random()*(innerWidth-2*rad)) + rad;
	var y = Math.floor(Math.random()*(innerHeight-2*rad)) + rad;
	var dx = (Math.random()-0.5)*3;
	var dy = (Math.random()-0.5)*3;
	circleArrey.push(new Circles(x,y,dx,dy));
}

function anim_ball(){
	requestAnimationFrame(anim_ball);//Refreshes the page
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i = 0;i < circleArrey.length; i++){
		circleArrey[i].update();
	}
}
anim_ball();
	