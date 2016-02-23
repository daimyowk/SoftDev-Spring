/*
Javis Wu
SoftDev2 Pd6
HW 2b -- Dot, Dot, Dot
2016-02-11
*/
var c = document.getElementById("playground");
var button = document.getElementById("clear");
var ctx = c.getContext("2d");
var clickCircle = function clickCircle(e){
    var x = e.offsetX; //gives x cor of mouse when clicked
    var y = e.offsetY; //gives y cor of mouse when clicked
    console.log(x);
    ctx.lineTo(x,y); //won't do anything for first click because "pencil" isn't at a point yet.
    ctx.stroke();
    ctx.beginPath(); //beginPath here to reset the paths and make sure only a circle is drawn and filled. Without it, fills in werid shapes between circles
    ctx.arc(x,y,20,0,2*Math.PI); //here "pencil" point left on edge of circle
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(x,y); //puts "pencil" back on the center of circle so the centers of circles are connected not tangent points.
    
};

c.addEventListener("click",clickCircle);
button.addEventListener("click", function clear(e){
    ctx.clearRect(0,0,538,538); // 1st and 2nd  parameters indicate xy of rectangle that will erase. 3rd and 4th indicates height and width of the rectange. Whatever is covered by this rectangle is cleared. 
    ctx.beginPath(); //this will reset the "pencil" so that once again it's not at a point, making sure on the first click only a circle is done.
});
