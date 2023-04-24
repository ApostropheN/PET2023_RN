sumarDosNumeros();

function sumarDosNumeros(){
    const Num1 = ingresarNumero(); // obtengo el valor de num 1 en la funcion que pide y valida el numero
    if (Num1==0){
        salir();
        return;
    }
    const Num2= ingresarNumero(); // obtengo el valor de num 2 en la funcion que pide y valida el numero
    if (Num1==0){
        salir();
        return;
    }
    let suma;
    suma = Number(Num1) + Number(Num2); // paso los numeros a valor numerico para que los sume en vez de concatenarlos
    alert("La suma es: " + suma);
    document.getElementById("Resultados").innerHTML = "<a>Primer Numero: " + Num1 + "</a><br>\
                                                       <a>Segundo Numero: " + Num2 + "</a><br>\
                                                       <a>Total: " + suma + "</a>"; // Muestro la suma en la pagina
}
function ingresarNumero(){
    let Num = prompt("Ingrese un numero positivo o 0 para salir"); // prompt solicitando numero
    while ( isNaN(Num) || Num<0 || Num=="" ){ // verifico que sean numeros  0 (salir)  arriba
        Num = prompt("Solo numeros positivos. Ingrese el primer numero o 0 para salir"); // Si no se cumplen las condiciones vuelvo a pedir un numero hasta que se cumplan
    }
    return Num;
}

function salir(){
    alert("Operacion Anulada");
    document.getElementById("Resultados").innerHTML = "<a>Operacion Cancelada</a>";
}


