var gameState =0;
var playerCount=0;

var database;
var form1, game1,canvas;
var allplayers, player1;
var distance=0;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database(); //Crea una base de datos en firebase

    game1 = new Game();
    console.log("PASO 1: game1.getState()");
    game1.getState();

    console.log("PASO 2: game1.start()");
    game1.start();
}//Fin setup


function draw(){
    background(205, 92, 92); //RGB rojoIndian
    
    if(playerCount === 4){
        game1.update(1); //Actualiza el estado del juego, pasando 1 como parámetro a la función update de Game.js
    }//Fin if

    if(gameState === 1){
        clear(); //?????????????????????
        game1.play(); //Manda a llamar la función play() de Game.js
    }//Fin if
}//Fin draw

