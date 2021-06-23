canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="";
var last_position_x,last_position_y;
var current_position_of_mouse_x,current_position_of_mouse_y;
var colour="black";
var width=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
mouseevent="mousedown";
colour=document.getElementById("color").value;
width=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove);



function my_mousemove(e) 
{ current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
      if (mouseevent == "mouseDown")
       { ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = width;
  console.log("Last position of x and y coordinates = "); 
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);
 console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
 ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
 ctx.stroke(); }
 last_position_x=current_position_of_mouse_x;
 last_position_y=current_position_of_mouse_y;  
}
function clearArea() {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

