do{
  var jugador1 = prompt("piedra, papel o tijera");
  jugador1 = jugador1.toLowerCase();
  var aleatorio = Math.floor((Math.random()*3)+1);
  var jugador2 = aleatorio == 1 ? "papel" : (aleatorio == 2 ? "piedra" : "tijera");
  
  if(jugador1 == jugador2){
    alert("Empates");
  } else {
    switch(jugador1){
      case "piedra":
        if(jugador2 == 'tijera'){
          alert("GANASTE, venciste a "+jugador2)
        }else{
          alert("PERDISTE \n (" + jugador2 + ")");
        }
      break;
      
      case "papel":
        if(jugador2 == 'piedra'){
          alert("GANASTE, venciste a "+jugador2)
        }else{
          alert("PERDISTE \n (" + jugador2 + ")");
        }
      break;
        
      case "tijera":
        if(jugador2 == 'papel'){
          alert("GANASTE, venciste a "+jugador2)
        }else{
          alert("PERDISTE \n (" + jugador2 + ")");
        }
      break;
    
    }
  }
      
  var seguir_jugando = prompt("Deseas seguir jugando s/n");
} while(seguir_jugando != 'n');

