function analizar_texto(texto){
    if (texto === texto.toUpperCase()){
     return "El texto esta formado solo por mayúsculas";
    }else if (texto === texto. toLowerCase()) {
     return "El texto está formado solo por minúsculas";
    }else {
        return "El texto está formado por una mezcla de mayúsculas y minúsculas";
    }
}


var texto = prompt("Ingrese su cadena de texto por favor: ");
console.log(analizar_texto(texto))