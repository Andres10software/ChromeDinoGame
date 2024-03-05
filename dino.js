
//board
let board; 
let boardWidth = 750; //this is to set how wide the board is
let boardHeight = 250; // this is to set the height of the board
let context 

//dino 
let dinoWidth = 88; //dino's width
let dinoHeight = 94; //dino's heigh
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoimg;

let dino = {
    x : dinoX,
    y : dinoY,
width : dinoHeight,
height : dinoHeight
}


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board 

// draw initial dino 
//context.fillStyle="hotpink";
//context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoimg = new Image();
    //
    dinoimg.src = './img/dino.png';
    dinoimg.onload = function() {
    context.drawimage(dinoimg, dino.x, dino.y, dino.width, dino.height);
    }
}

