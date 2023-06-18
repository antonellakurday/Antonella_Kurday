var vocales = ["a", "e","i","o","u"];
var text = prompt("introduce un texto")
var textlow= text.toLowerCase();
var posicion= 0;
var parar= false;
for (var i =0; i <textlow.length; i++) {
    for (var j=0; j < vocales.length; j++){
        if(vocales[j]==textlow.charAt(i)) {     
         posicion = i+1;
          parar= true;
          break;
         }
     }
if(parar){
    break;
 }
}
console.log("la primera vocal esta en la posicion "+ posicion);