function  PromedioNotas () {    
    const notas =[];
    let contadorNotas = 0, promedio = 0, num = 0;
    do{
        num = Number(
            prompt (`Ingrese las notas. Al terminar, ingrese "-1" `, `...`)
            
        );
        if(Number.isNaN(num)){
            document.write(`<h2>Ingrese un numero.</h2>`);
        }
        else if (num != -1) {
            notas.push(num)
        }
     } while (num != -1);

     for (let i=0; i < notas.length; i++){
     contadorNotas= contadorNotas+notas[i]
     };
      promedio = contadorNotas/ notas.length;
      if(promedio <6) {
      document.write("<h2>Reprobado.</h2>")
     }     else if (promedio >=6 && promedio <= 8) {
        document.write("<h2>Aprobado.</h2>") 
     }       else if (promedio > 8) {
            document.write ("<h2>Sobresaliente.</h2>")
        }
      else{
      document.write(`<h2> Si desea ingresar notass, recargue la página.</h2>`)
     }
   
}
PromedioNotas ();

