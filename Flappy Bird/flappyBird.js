'use strict';

let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

// load images

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let gap = 200;
let constant;

let bX = 10;
let bY = 150;

let gravity = 0.75;

let score = 0;

// audio

let fly = new Audio();
let scoreSound = new Audio();

fly.src = "audio/fly.mp3";
scoreSound.src = "audio/score.mp3";

// key press listener

document.addEventListener("keydown", moveUp);

function moveUp() {
    bY -= 35;
    fly.play();
}

// pipe coordinates

let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
};

// draw pipe

function draw() {

    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++) {

        constant = pipeUp.height + gap;
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + constant);

        pipe[i].x--;

        if (pipe[i].x == 50) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        // collision detector

        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeUp.width && (bY <= pipe[i].y + pipeUp.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
            location.reload(); // reload the page
            return false;
        }

        if (pipe[i].x == 5) {
            score++;
            scoreSound.play();
        }

    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);

}

draw();