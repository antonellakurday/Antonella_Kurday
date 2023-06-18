var valores = ["true", "false", 2, "hola", "mundo", 3, "char"];
var ElementosTexto= valores.filter (function(valor){
    return typeof valor==="string";
});

var ElementoMasLargo = ElementosTexto.reduce(function (anterior, actual){
    return actual.length > anterior.length ? actual:anterior;
});
    
console.log("el mayor es:" + ElementoMasLargo);


//Ejercicio 1.2//


var ElementosOrdenados= ElementosTexto.sort (function (a, b) {
    return a.length - b.length;  
})
console.log ("Elementos de texto ordenados de menor a mayor cantidad de letras:");
console.log (ElementosOrdenados);

//Ejercicio 1.3//

var numeros= valores.filter(function(valor){
    return typeof valor==="number";
});
var suma=numeros [0] + numeros [1];
var resta=numeros [0] - numeros [1];
var multiplicacion=numeros [0]=numeros[1];
var división=numeros [0]/numeros [1];
console.log("Resultado de la suma:" + suma);
console.log("resultado de la resta:"+ resta);
console.log ("resultado de la multiplicación:"+ multiplicacion);
console.log ("resultado de la división:" + división);
