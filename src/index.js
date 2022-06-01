import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});

canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

//キャンバスの外にマウスが行ったらフラグをfalseにする
canvas.addEventListener("mouseout", () => {
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;

//要素の座標の取得
var elem = document.getElementById("draw-area");
var r = elem.getBoundingClientRect();

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.strokeStyle = "yellow";
  context.lineTo(x - r.left, y - r.top); //キャンバスの左上からの座標
  context.stroke();
}
