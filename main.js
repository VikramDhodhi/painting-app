var lastxposition,lastyposition
var mouseevent="empty";
var canvas=document.getElementById("myCanvas");
 var ctx=canvas.getContext("2d");
var color="cyan";
var widthline=2;

canvas.addEventListener("mousedown", amousedown);
function amousedown(e){
mouseevent="mousedown";
console.log(mouseevent);
}

canvas.addEventListener("mousemove", musemove);
function musemove(e){
    console.log("mouseismoving");
    currentxposition=e.clientX-canvas.offsetLeft;
    currentyposition=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthline;
        ctx.moveTo(lastxposition,lastyposition);
        ctx.lineTo(currentxposition,currentyposition);
        ctx.stroke();
  
    }
    lastxposition=currentxposition;
    lastyposition=currentyposition;


}

canvas.addEventListener("mouseup",amouseup)
function amouseup(e){
    mouseevent="mouseup";

}

canvas.addEventListener("mouseleave",amouseleave)
function amouseleave(e){
    mouseevent="mouseleave";

}
