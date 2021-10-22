class Game{
    constructor(){}

    getState(){ //Función para obtener el estado del juego
        var gameStateRef= database.ref('gameState'); //referencia al gameState de la DB creada
        gameStateRef.on("value",function(data){gameState = data.val();}) //Crea oyente para el gameState del juego
    }//Fin gameState()

    update(state){//Función para actualizar la referencia de la DB
        database.ref("/").update({gameState: state}); // "/" se refiere a la DB principal del gameState, la "raíz"
    }//Fin update()

    async start(){ //Función para iniciar el juego, se mostrará en pantalla dependiendo del estado del juego
        if(gameState === 0){ 
            player1 = new Player() //Crera un nuevo objeto para el jugador
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player1.getCount(); //Obtiene el puntaje para el jugador
            }
            
            form1 = new Form(); //Crea un objeto para el formulario
            form1.display(); //Muestra el formulario
        }//Fin if
    }//Fin start()

    play(){ //Función para el estado del juego PLAY o 1
        form1.hide();    //Oculta el formulario cuando estamos en PLAY
        textSize(27);
        text("Game Start", 120,100);
        Player.getPlayerInfo(); //Manda a llamar la función para mostrar la info de los jugadores

        if(allplayers !== undefined){ //Significa que existe algún jugador registrado en la DB
            var display_position = 130; //Posición de partida de cada jugador
         for(var plr in allplayers){
            if(plr === "player" + player1.index)
                fill("red");
                else
                    fill("black");
        
            display_position +=20; //Suma 20 pixeles a la posición original
            textSize(17);
            text(allplayers[plr].name + ": " + allplayers[plr].distance, 117, display_position); //Muestra los datos de los jugadores en pantalla
          }//Fin for
        }//Fin if

        
        if(keyIsDown(UP_ARROW) && player1.index !== null){ //Si se presiona la flecha de arriba y el jugador es distinto de nullo
            player1.distance +=50; //Actualiza la distancia de los jugadores
            player1.update();    //Actualiza información en la base de datos
            console.log("LLEGA???");
        }
        
    }//Fin play()

}//Fin class