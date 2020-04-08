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