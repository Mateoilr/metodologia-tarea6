# metodologia-tarea6
 
'use strict';

let clave=1834
let contador=0
let num;

do{
    num= Number(prompt('Ingrese la clave'));
    contador++;
}
while(num!=clave && contador < 5)
    if(contador==5 && num != clave)
        {
            alert('Clave incorrecta');
            alert('tarjeta bloqueada');
        }else
        {
            alert('Clave correcta');
            alert('Operacione exitosas')
        };