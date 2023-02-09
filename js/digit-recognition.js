//-------------------
// GLOBAL constants
//-------------------
const canvas_width = 175;
const canvas_height = 175;
const canvas_stroke_style = "#64ffda";
const canvas_line_join = "round";
const canvas_line_width = 10;
const canvas_background_color = "#0a192f";
const canvas_id = "canvas";

//---------------
// Create canvas
//---------------
const canvas_box = document.getElementById('canvas_box');
const canvas = createCanvas();
canvas_box.appendChild(canvas);

const ctx = canvas.getContext("2d");

//-------------------
// Global variables
//-------------------
let clickX = [];
let clickY = [];
let clickD = [];
let drawing = false;

//---------------------
// MOUSE DOWN function
//---------------------
canvas.addEventListener("mousedown", handleMouseDown);

//-----------------------
// TOUCH START function
//-----------------------
canvas.addEventListener("touchstart", handleTouchStart);

//---------------------
// MOUSE MOVE function
//---------------------
canvas.addEventListener("mousemove", handleMouseMove);

//---------------------
// TOUCH MOVE function
//---------------------
canvas.addEventListener("touchmove", handleTouchMove);

//-------------------
// MOUSE UP function
//-------------------
canvas.addEventListener("mouseup", handleMouseUp);

//---------------------
// TOUCH END function
//---------------------
canvas.addEventListener("touchend", handleTouchEnd);

//----------------------
// MOUSE LEAVE function
//----------------------
canvas.addEventListener("mouseleave", handleMouseLeave);

//-----------------------
// TOUCH LEAVE function
//-----------------------
canvas.addEventListener("touchleave", handleTouchLeave);

//--------------------
// ADD CLICK function
//--------------------
function addUserGesture(coords) {
  clickX.push(coords.x);
  clickY.push(coords.y);
  clickD.push(coords.dragging);
}

//-------------------
// RE DRAW function
//-------------------
function drawOnCanvas() {
	ctx.clearRect
