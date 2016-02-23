/*
Javis Wu
SoftDev2 Pd6
HW1b -- Finding Your Path Around the Canvas
2016-02-10
*/
var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");
ctx.fillStyle="blue"; 
ctx.strokeStyle="red"; 
ctx.lineWidth="10"; 
ctx.beginPath(); 
ctx.moveTo(35,20); 
ctx.lineTo(35,120);  
ctx.lineTo(135,120);
ctx.lineTo(135,20);
ctx.lineTo(35,20);
ctx.moveTo(100,200);
ctx.arc(200,200,100,0,2); 
ctx.stroke(); 
ctx.fill();  
ctx.moveTo(320,300);
ctx.arc(300,300,20,0,6.5);
ctx.moveTo(250,50);
ctx.lineTo(250,100);
ctx.moveTo(275,50);
ctx.lineTo(275,100);
ctx.moveTo(282.5,120);
ctx.arc(262.5,120,20,0,3);
ctx.stroke(); 
ctx.font="30px arial"; 
ctx.fillText("hello",400,400); 
ctx.closePath();

/*
ctx.fillStyle="color" sets color of inside of shapes
ctx.strokeStyle="color" sets color of lines drawn
ctx.lineWidth="number" sets width of lines
ctx.beginPath() indicates starting of doing stuff to canvas. Must have this before being able to draw stuff
ctx.moveTo(a,b) parameters are xy coors.  basically indicates where to start drawing/doing stuff. Kind of like hovering a pencil above a certain area
ctx.lineTo(a,b) parameters are xy coors. Draws an invisible line from where the "pencil" is currently to the x,y given. 
ctx.arc(a,b,c,d,e) first two parameters indicate x,y of center of arc. their parameter indicates the radius. last two are the start angle to the end angle. Important to note it is in radians not degrees. Goes clockwise. Important to note if I don't move the "pencil" to where arc starts, extra line is drawn from where the pencil was last to where the arc starts
ctx.stroke() draws the invisible lines
ctx.fill() basically fills the inside of a shape created.Even if lines don't close, invisible line seems to be created from where the "pencil" first started at to the end of last line drawn.
ctx.font="font" sets font of text and size of font to be used on canvas
ctx.fillText("text",x,y) first parameter is text to be shown. 2nd and 3rd are xy coors of where text will be placed.
ctx.closePath(); indicates stopping of doing stuff on canvas
*/

