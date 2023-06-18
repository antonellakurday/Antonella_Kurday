let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let numMes = parseInt(prompt("Ingresa un número del 1 al 12"));

if (numMes >= 1 && numMes <= 12) {
  let mes = meses[numMes-1];
  document.write("El mes correspondiente al número " + numMes + " es " + mes);
} else {
  document.write("El numero ingresado no es válido");
}