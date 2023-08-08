import "./style.css";

const container = <HTMLDivElement>document.querySelector("#container");
const ball = <HTMLDivElement>document.querySelector(".ball");

addEventListener("click", (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  ball.style.top = `${mouseY}px`;
  ball.style.left = `${mouseX}px`;
  console.log(mouseX, mouseY);
  for (let count = 0; count < 30; count++) createCircle(mouseX, mouseY);
});

function createCircle(mouseX: number, mouseY: number) {
  // 设置偏移量
  const offsetX = Math.floor(randomNumber(Math.random() * 200));
  const offsetY = Math.floor(randomNumber(Math.random() * 200));

  const elementDiv = createElement(mouseX, mouseY, offsetX, offsetY);

  console.log(elementDiv);

  container.appendChild(elementDiv);
}

function createElement(
  mouseX: number,
  mouseY: number,
  offsetX: number,
  offsetY: number
): HTMLDivElement {
  const div = document.createElement("div");

  div.setAttribute("class", "ball");

  div.style.top = `${mouseX}px`;
  div.style.left = `${mouseY}px`;

  div.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.2)`;

  return div;
}

function randomNumber(number: number): number {
  return Math.random() >= 0.5 ? number : -number;
}
