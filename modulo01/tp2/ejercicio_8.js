function generarNumerosAleatorios() {
    var numeros = [];
    
    // Generar números aleatorios únicos
    while (numeros.length < 100) {
      var numero = Math.floor(Math.random() * 100) + 1;
      if (numeros.indexOf(numero) === -1) {
        numeros.push(numero);
      }
    }
    
    // Imprimir los números en pantalla
    for (var i = 0; i < numeros.length; i++) {
      document.write(numeros[i] + "<br>");
    }
  }
  
  generarNumerosAleatorios();