var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function triangle(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX - size / 2, positionY + size);
    context.lineTo(positionX + size / 2, positionY + size);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgba(0,0,0,.5)';
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.stroke();
    context.fill();
}

triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);

function star(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX + size, positionY);
    context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
    context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
    context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgb(233,159,184)';
    context.stroke();
    context.fillStyle = 'rgb(233,159,184)';
    context.fill();
}

star(40, 50, 75);
star(130, 120, 100);
star(250, 220, 150);

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function lineToCenter(positionX, positionY, color) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(canvasWidth / 2, canvasHeight / 2);
    context.strokeStyle = color;
    context.stroke();
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var lineCounter = 1; lineCounter <= 1000; lineCounter++) {
    lineToCenter(random(canvasWidth, 0), random(canvasHeight, 0), 'teal');
}