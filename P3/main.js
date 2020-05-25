
//-- Definimos las dimensiones del canvas
//-- Para que ocupe toda la pantalla
alert("Limite: 10 puntos!");

var canvas = document.createElement("canvas"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

//-- Definimos las variables
let win1 = new Audio();
win1.src = "hit.wav";
let win2 = new Audio();
win2.src = "wall.wav";
let cantina = new Audio();
cantina.src = "cantina.wav";



var IAVelocity = 5;
var IAScore = 0;
var ScoreP1 = 0;

document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");


//-- Definimos las raquetas
function buttonColor() {
  ctx.font = "30px Comic Sans MS";
};
ctx.fillRect(0, 0, width, height);
    var paddle = {
    _x: 0,
    _y: 0,
    _width: 0,
    _height: 0,
    create: function(x, y, width, height) {
        var p = Object.create(this);
            p._x = x;
            p._y = y;
            p._width = width;
            p._height = height;
        return p;
    },

    render: function(c) {
        c.fillRect(this._x, this._y, this._width, this._height);
    },

    setX: function(x) {
        this._x = x
    },

    setY: function(y) {
        this._y = y;
    },

    getX: function() {
        return this._x;
    },

    getY: function() {
        return this._y;
    },

        getWidth: function() {
        return this._width;
    },

    getHeight: function() {
        return this._height;
    }
};
// Movimiento y dimensiones de la bola
var ball = {
    _x: width / 2, // centra la bola
    _y: height / 2, // centra the bola
    _vx: -10,
    _vy: 2,
    _size: 10,

    update: function() {
        this._x += this._vx;
        this._y += this._vy;
    },

    render: function(c) {
        c.beginPath();
        c.arc(this._x, this._y, this._size, 0, Math.PI * 2);
        c.fill();
        c.closePath();
    }
};

var Player1 = paddle.create(0, 0, 10, 100);
var IA = paddle.create(width - 10, 0, 10, 100);
// El movimiento de la raqueta la damos con el cursor
document.body.addEventListener("mousemove", mouseMoveHandler);

function mouseMoveHandler(event) {
    Player1.setY(event.clientY - Player1.getHeight() / 2);
}

function reset() {
    ball._x = width / 2;
    ball._y = height / 2;
    ball._vx *= -1;
}

update();
//-- Definimos el movimiento de la bola en la pista

  function update() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    if(ball._y - ball._size < 0 || ball._y + ball._size > height) {
    ball._vy *= -1;
}

if(ball._x - ball._size < 0) {
    if(ball._y >= Player1.getY() && ball._y <= Player1.getY() + Player1.getHeight()) {
        ball._vx *= -1;
    } else {
    IAScore++;
  reset();
    }
}

if(ball._x + ball._size > width) {
    if(ball._y >= IA.getY() && ball._y <= IA.getY() + IA.getHeight()) {
        ball._vx *= -1;
    } else {
      ScoreP1++;
  reset();
    }
}

    var IAPos = IA.getY();


//  Establecemos limites de movimiento para la IA
// Para que no se vaya hacia arriba o abajo de forma indefinida
if(IAPos < 0) {
    IAVelocity *= -1;
}

if(IAPos + IA.getHeight() > height) {
    IAVelocity *= -1;
}

// update IA
IA.setY(IAPos + IAVelocity);

ball.update();
ctx.fillStyle = "white";
Player1.render(ctx);
IA.render(ctx);
ball.render(ctx);
buttonColor();
ctx.fillText(ScoreP1, width / 4, height / 10);
ctx.fillText(IAScore, width / 4 * 3, height / 10);
requestAnimationFrame(update);
cantina.play();



if (IAScore >= 10){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillText("IA Gana!",600, 250);
  buttonColor();
  win1.play();
  ScoreP1 = 0;

}else if (ScoreP1 >= 10){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillText("Player1 Gana!",580, 250);
  buttonColor();
  win2.play();
  IAScore = 0;

  }

}
