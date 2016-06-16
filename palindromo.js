function palindromo(palabra){
  var palabra_sin_espacios = "", palabra_volteada = "";
  var tam = 0;
  for(var i in palabra){
    if(palabra[i] != ' '){
      palabra_sin_espacios += palabra[i].toLowerCase();
      tam++;
    }
  }
  while(tam-- > 0){
    palabra_volteada += palabra_sin_espacios[tam];
  }
  return palabra_volteada == palabra_sin_espacios ? true : false;
}

var palabra = prompt("Escribe una palabra:");

if(palindromo(palabra)){
  alert(palabra + " es un palindromo")
} else {
  alert(palabra + " no es palindromo")
}