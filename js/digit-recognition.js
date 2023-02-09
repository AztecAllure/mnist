const canvasWidth = 175;
const canvasHeight = 175;
const canvasStrokeStyle = "#64ffda";
const canvasLineJoin = "round";
const canvasLineWidth = 10;
const canvasBackgroundColor = "#0a192f";
const canvasId = "canvas";

let clickX = [];
let clickY = [];
let clickD = [];
let drawing = false;

const canvasBox = document.getElementById("canvas_box");
const canvas = document.createElement("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvas.id = canvasId;
canvas.style.backgroundColor = canvasBackgroundColor;
canvasBox.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  drawing = true;
  addUserGesture(mouseX, mouseY);
  drawOnCanvas();
});

canvas.addEventListener("touchstart", (event) => {
  if (event.target !== canvas) {
    return;
  }
  event.preventDefault();

  const rect = canvas.getBoundingClientRect();
  const touch = event.touches[0];

  const mouseX = touch.clientX - rect.left;
  const mouseY = touch.clientY - rect.top;

  drawing = true;
  addUserGesture(mouseX, mouseY);
  drawOnCanvas();
});

canvas.addEventListener("mousemove", (event) => {
  if (!drawing) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  addUserGesture(mouseX, mouseY, true);
  drawOnCanvas();
});

canvas.addEventListener("touchmove", (event) => {
  if (event.target !== canvas) {
    return;
  }
  event.preventDefault();
  if (!drawing) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const touch = event.touches[0];

  const mouseX = touch.clientX - rect.left;
  const mouseY = touch.clientY - rect.top;

  addUserGesture(mouseX, mouseY, true);
  drawOnCanvas();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

canvas.addEventListener("touchend", (event) => {
  if (event.target !== canvas) {
    return;
  }
  event.preventDefault();
  drawing = false;
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
});

canvas.addEvent
