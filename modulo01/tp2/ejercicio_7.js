function invertir_Texto(texto) {
    var textoInvertido = "";
    for (var i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
  }

  var textoOriginal = "¡Hola, mundo!";
  var textoInvertido = invertir_Texto(textoOriginal);
  console.log(textoInvertido);