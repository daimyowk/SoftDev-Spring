var c = document.getElementById("playground");
var button = document.getElementById("circle");
var ctx = c.getContext("2d");
var radius = 0;
var increasing = true;
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
    window.requestAnimationFrame(circleAnimation);
}
button.addEventListener("click", circleAnimation);
    
