let sigma = 10;
let rho = 28;
let beta = 8 / 3;
let dt = 0.01;

let attractors = [];
let number = parseInt(prompt("Enter Number of Elements: "));
while (isNaN(number) || number <= 0) {
  if (isNaN(number)) {
    number = parseInt(prompt("Enter A valid Number: "));
  } else if (number <= 0) {
    number = parseInt(prompt("Enter A valid positive Integer: "));
  }
}

let num = number;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  for (let i = 0; i < num; i++) {
    let initCond = (i + 1) * 0.05;
    let c = color(((i + 1) / num) * 255, 100, 255);
    attractors[i] = new Atrractor(initCond, initCond, initCond, c);
  }
}

function draw() {
  background(30);
  orbitControl();
  scale(5);

  for (let i = 0; i < num; i++) {
    attractors[i].update();
    attractors[i].display();
  }
}
