const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const canTx = canvas.getContext("2d");
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};
function drawBall() {
  canTx.beginPath();
  canTx.arc(ball.x, ball.y,ball.size, 0, Math.PI * 2, true);
  canTx.fillStyle = "#0095dd"
  canTx.fill();
}
drawBall();
rulesButton.addEventListener("click", () => rules.classList.add("show"));
closeButton.addEventListener("click", () => rules.classList.remove("show"));
