let currentScreen = 1;
let xPos = [];
let mySwitch = false;
let yPos = [];
let sizes = [];
let xSpeed = [];
let ySpeed = [];
let total = 20;
let p = 250;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.id("p5Canvas");
  cnv.parent("p5-canvas-container");
  for (let i = 0; i < 20; i++) {
    xPos.push(random(0, width));
    yPos.push(random(0, height));
    sizes.push(random(5, 45));
    xSpeed.push(random(-10, 10));
    ySpeed.push(random(-10, 10));
  }
}

function draw() {
  push()
   
  background(113, 41, 150);
  drawScreen3();
  
  

  // Draw different screens based on the value of currentScreen
  if (currentScreen === 1) {
    drawScreen1();
  } else if (currentScreen === 2) {
    drawScreen2();
  }
}

function drawScreen1() {
  // Draw content for screen 1
  textSize(17);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Start", width / 2, height / 2);
  text("Click to go to Screen 2", width / 2, height / 2 + 50);
  text(
    "When all the balls turn red start clicking the pill until you see this again",
    width / 2,
    height / 2 + 100
  );
}

function drawScreen2() {
  // Draw content for screen 2
  textSize(15);
  textAlign(CENTER, CENTER);
  fill(0);
  text(
    " There was a virus which scientists recently discovered. It seems to be highly contagious. Let's take a look at it's activity.",
    width / 2,
    height / 2
  );
}

function drawScreen3() {
  for (let i = 0; i < xPos.length; i++) {
    xPos[i] += xSpeed[i];
    yPos[i] += ySpeed[i];
    grow(i);

    circle(xPos[i], yPos[i], sizes[i]);
    

    bounce(i);
  }
}
function grow(index) {
  let s = sizes[index];
  sizes[index] += 0.1;
  if (mouseIsPressed) {
    sizes[index] -= 1;
  }

  if (s > 200) {
    stroke("white");
    fill("red");
    textFont("Courier New");
    textSize(45);
    push();
    fill(0);
    text(" Virus detected", 250, 300);

    pop();
  } else {
    fill(108, 168, 81);
  }

  if (s < 5) {
    mySwitch = false;
    push();
    fill(0);
    textFont("Courier New");
    textSize(45);
    pop();
    currentScreen = 1;
  }

  if (p <= 0) {
    push();
    fill(240, 213, 175); // White color
    stroke(0); // Black outline
    strokeWeight(2); // Set the thickness of the outline
    beginShape();
    // Left semi-circle
    fill(242, 56, 214);
    arc(mouseX, mouseY, 100, 100, HALF_PI, -HALF_PI);
    // Right semi-circle
    fill(99, 227, 57);
    arc(mouseX, mouseY, 100, 100, -HALF_PI, HALF_PI);
    endShape(CLOSE);
    pop();
  } else if (p <= 250) {
    push();
    fill(240, 213, 175); // White color
    stroke(0); // Black outline
    strokeWeight(2); // Set the thickness of the outline
    beginShape();
    // Left semi-circle
    fill(242, 56, 214);
    arc(mouseX, mouseY, 100, 100, HALF_PI, -HALF_PI);
    // Right semi-circle
    fill(99, 227, 57);
    arc(mouseX, mouseY, 100, 100, -HALF_PI, HALF_PI);
    endShape(CLOSE);
    pop();
  }
  if (s > 270) {
    mySwitch = false;
    background(53, 7, 105);
    push();
    fill(0);
    text("YOU FAILED TO SAVE THE HUMAN RACE", mouseX, mouseY);
    pop();
  }
}


function bounce(index) {
  let x = xPos[index];
  let y = yPos[index];

  if (x > width || x < 0) {
    xSpeed[index] = xSpeed[index] * -1;
  }
  if (y > height || y < 0) {
    ySpeed[index] = ySpeed[index] * -1;
  }
}

function mousePressed() {
  // Change the screen when the mouse is pressed
  if (currentScreen === 1) {
    currentScreen = 2;
  } else {
    currentScreen = 3;
  }
}


