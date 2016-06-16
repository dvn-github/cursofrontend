function minusculas(texto){
  var texto_ok = "";
  var abecedario = {A : "a", "Á":"a", B : "b", C : "c", D : "d", E : "e", "É":"e", F : "f", G : "g", H : "h", I : "i", "Í":"i", J : "j", K : "k", L : "l", M : "m", N : "n", Ñ : "ñ", O : "o", "Ó":"o", P : "p", Q : "q", R : "r", S : "s", T : "t", U : "u", "Ú":"u", V : "v", W : "w", X : "x", Y : "y", Z : "z"}; 
  for(var i in texto){
    if(texto[i] in abecedario){
      texto_ok += abecedario[texto[i]];
    } else {
      texto_ok +=  texto[i];
    }
  }
  return texto_ok;
}

do{
  var jugador1 = prompt("piedra, papel o tijera");
  jugador1 = minusculas(jugador1);
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
      
      default:
        alert("Esa madre no existe!!");
      break;
    }
  }
      
  var seguir_jugando = prompt("Deseas seguir jugando s/n");
} while(seguir_jugando != 'n');

