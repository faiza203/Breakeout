const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const canTx = canvas.getContext("2d");
let score = 0;
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height / 2 - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};
function drawBall() {
  canTx.beginPath();
  canTx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true);
  canTx.fillStyle = "#0095dd";
  canTx.fill();
  canTx.closePath();
}
function drawPaddle() {
  canTx.beginPath();
  canTx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  canTx.fillStyle = "#0095dd";
  canTx.fill();
  canTx.closePath();
}
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
}
function drawScore() {
  canTx.font = "20px Arial";
  canTx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}
draw();
rulesButton.addEventListener("click", () => rules.classList.add("show"));
closeButton.addEventListener("click", () => rules.classList.remove("show"));
