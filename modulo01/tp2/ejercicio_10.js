let dia, mes, año;
mes = prompt("Ingrese el número del mes:","...");
mes =parseInt (mes);
if (mes ==4 || mes ==6 || mes== 9 || mes== 11){
    document.write("Este mes tiene 30 días");
}
else {
    if (mes ==2)
         document.write("Este mes puede contener 28 días")
    else if (mes ==1 || mes==3|| mes==5 || mes==7|| mes==8 || mes==10 || mes==12 )
    document.write("Este mes tiene 31 días")
    else
     alert("Ingrese un numero del 1 al 12, gracias")
}
console.log