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

function palindromo(palabra){
  var palabra_sin_espacios = "", palabra_volteada = "";
  var tam = 0;
  for(var i in palabra){
    if(palabra[i] != ' '){
      palabra_sin_espacios += minusculas(palabra[i]);
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