/*
Javis Wu
SoftDev2 Pd6
HW 03 -- Are We Ever Going to Start the Movie?
2016-02-23
*/
var c = document.getElementById("playground");
var button = document.getElementById("circle");
var button2 = document.getElementById("stop");
var button3 = document.getElementById("dvd");
var ctx = c.getContext("2d");
var radius = 0;
var increasing = true;
var logo = new Image();
var velocityX=2;
var velocityY=1;
var dvdx=150;
var dvdy=100;
logo.src="logo_dvd.jpg";
ctx.fillStyle="red";
ctx.strokeStyle="red";
var circleAnimation = function circleAnimation(e){
    ctx.clearRect(0,0,538,538);
    ctx.beginPath();
    ctx.arc(269,269,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if (269 + radius >= 538 && increasing){
	increasing=false;
    }
    if (radius <= 0 && !increasing){
	increasing=true;
    }
    if (increasing){
	radius=radius+1;
    }
    else {
	radius=radius-1;
    }
    requestID=window.requestAnimationFrame(circleAnimation);
}
var dvdAnimation = function dvdAnimatino(){
    ctx.beginPath();
    if (dvdx+100 >= 539 || dvdx <= 0){
	velocityX *= -1;
    }
    if (dvdy+100 >=539 || dvdy <=0){
	velocityY *= -1;
    }
    dvdx=dvdx+velocityX;
    dvdy=dvdy+velocityY;
    ctx.drawImage(logo,dvdx,dvdy,100,100);
    requestID=window.requestAnimationFrame(dvdAnimation);
    
}
var requestID;
var dvdAnimation2 = function() {
    window.cancelAnimationFrame(requestID)
    //this cancel makes it so that there won't be multiple requestIDs. the dvd wont speed up if the button is clicked multiple times.
    var dvdStuff = function(){
	ctx.beginPath();
	if (dvdx+100 >= 539 || dvdx <= 0){
	    velocityX *= -1;
	}
	if (dvdy+100 >=539 || dvdy <=0){
	    velocityY *= -1;
	}
	dvdx=dvdx+velocityX;
	dvdy=dvdy+velocityY;
	ctx.drawImage(logo,dvdx,dvdy,100,100);
	requestID=window.requestAnimationFrame(dvdStuff);
	// this is here to make sure the dvd keeps moving once dvdStuff is called
    };
    dvdStuff();
}

button.addEventListener("click", circleAnimation);
button2.addEventListener("click", function (){
    window.cancelAnimationFrame(requestID);
});
button3.addEventListener("click",dvdAnimation2);

    
    
