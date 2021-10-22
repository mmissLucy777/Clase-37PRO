class Form{ //Clase para el formulario de registro de los jugadores
    constructor(){

        this.input = createInput("Nombre"); //Variable para crear una entrada de datos para nombre
        this.button = createButton("Play"); //Boton para inicar juego
        this.greeting = createElement("h3"); //Subtítulo
    }

    hide(){ //Función para ocultar el mensaje de bienvenida, buton Play y cuadro de texto para Nombre
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement("h2");//Cabecera del título
        title.html("Car Racing Game");
        title.position(130,0);      //Cordenadas exactas pa futuras preguntas        

        this.input.position(130,60); //Posición del la variable input en pantalla
        this.button.position(250,200);

        this.button.mousePressed(()=>{ //Función para el clic sobre el botón
            this.input.hide(); //Oculta el nombre
            this.button.hide();  //Oculta el botón
            player1.name = this.input.value();   //Obtiene el valor de la entrada 
            playerCount+=1; //Actualiza el número de jugadores
            player1.index = playerCount;
            player1.update(); //Actualiza en la DB el nombre del jugador -- LLAMADA PASO 3
            player1.updateCount(playerCount); //Actualiza en la DB el número de jugadores -- LAMADA PASO4
            this.greeting.html("Hellouuuu " + player1.name); //Saluda al jugador nuevo
            this.greeting.position(127,157); //Posición del mensaje de bienvenida en pantalla
        }); 


    }//Fin display
}//Fin Form.js