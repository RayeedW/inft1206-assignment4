// Bouncing ball 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

// function to generate random numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Ball object using a constructor
function Ball(x, y, velX, velY, size, color) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.size = size;
  this.color = color;
}

// method to draw ball
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// method to move the ball
Ball.prototype.update = function () {
  if ((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0) {
    this.velX = -this.velX;
  }
  if ((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

// create multiple balls
const balls = [];

while (balls.length < 10) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, canvas.width - size),
    random(size, canvas.height - size),
    random(-5, 5),
    random(-5, 5),
    size,
    `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`
  );
  balls.push(ball);
}

// main animation loop
function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball) => {
    ball.draw();
    ball.update();
  });

  requestAnimationFrame(loop);
}

loop();
