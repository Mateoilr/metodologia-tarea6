 'use strict';

let contadorIntentos = 0;

let claveCajero= 3214;

do{
    contadorIntentos ++;
    let claveIngresada = Number(prompt("Ingrese la clave del cajero"));
    if(claveIngresada === claveCajero) {
        alert("Clave Correcta");
        break;
    }
    else{
        if(contadorIntentos>=3){
            alert("Clave incorrecta, tarjeta bloqueada");
            break;
        }
    }
}   while(contadorIntentos<3)
    