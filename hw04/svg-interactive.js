var pic = document.getElementById("vimage");
var intervalID;
var button=document.getElementById("start");
var button2=document.getElementById("stop");
var button3=document.getElementById("dvd");
var stop=function(){
    window.clearInterval(intervalID)
}
var grow=function(){
    //init
    var radius=0;
    var increasing=true;
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle")
    c.setAttribute("cx",250);
    c.setAttribute("cy",250);
    c.setAttribute("fill","red");
    c.setAttribute("r",radius);
    var animateCode = function(){
	//c = document.getElementsByTagName("circle")
	// not sure why this is needed. it breaks the code for some reason
	radius = parseInt(c.getAttribute("r"));
	if (250 + radius >= 500 && increasing){
	    increasing=false;
	}
	if (radius <=0 && !increasing){
	    increasing=true;
	}
	if (increasing){
	    radius=radius+1;
	}
	else {
	    radius=radius-1;
	}
	c.setAttribute("r",radius.toString());
	pic.appendChild(c);
    }
    intervalID = window.setInterval(animateCode,16);
}
//i dont know why but for some reason the image just won't show even thought its attributes such as x and y are changing.
var dvdSetup=function(){
    var logo = new Image();
    var velocityX=2;
    var velocityY=1;
    var dvdx=150;
    var dvdy=100;
    logo.src="logo_dvd.jpg";
    var c = document.createElementNS("http://www.w3.org/2000/svg","image");
    c.setAttribute("x","100");
    c.setAttribute("y","100");
    //c.setAttribute("xlink:href","logo_dvd.jpg");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "logo_dvd.jpg");
    c.setAttribute("height", "100");
    c.setAttribute("width","100");
    //console.log(c.getAttribute("height"));
    c.setAttribute("visibility","visible");
    var dvd = function(){
	xCor=parseInt(c.getAttribute("x"));
	yCor=parseInt(c.getAttribute("y"));
	if (xCor+100 >= 500 || xCor <= 0){
	    velocityX *= -1;
	}
	if (yCor+100 >= 500 || yCor <=0){
	    velocityY *= -1;
	}
	newX=xCor+velocityX;
	newY=yCor+velocityY;
	c.setAttribute("x", newX.toString());
	c.setAttribute("y", newY.toString());
	//console.log(c.getAttribute("x"));
	pic.appendChild(c);
    }
    intervalID = window.setInterval(dvd,16);
}
	
button.addEventListener("click",grow);
button2.addEventListener("click",stop);
button3.addEventListener("click",dvdSetup);

