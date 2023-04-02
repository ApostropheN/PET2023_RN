document.addEventListener("DOMContentLoaded", function() {
    //esto permite que se cargue primero la pagina y luego los prompt, permitiendo que al final modifique el valor de los <p> N1/N2/Total
    sumarDosNumeros();
});

function sumarDosNumeros(){
    const Num1 = ingresarNumero() // obtengo el valor de num 1 en la funcion que pide y valida el numero
    if ( Num1 > 0 ){ // Si el numero ingresado es mayor que 0 continuo
        const Num2= ingresarNumero(); // obtengo el valor de num 2 en la funcion que pide y valida el numero
        if ( Num2 > 0){ // Si el numero ingresado es mayor que 0 continuo
            let suma;
            suma = Number(Num1) + Number(Num2); // paso los numeros a valor numerico para que los sume en vez de concatenarlos
            alert("La suma es: " + suma);
            document.getElementById("N1").innerHTML = Num1; // cambio el valor de los <p>
            document.getElementById("N2").innerHTML = Num2;
            document.getElementById("Total").innerHTML = suma;
        } else{
            alert("Operacion cancelada"); // Muestro que se cancelo la operacion y cargo hasta donde se ingresaron numeros.
            document.getElementById("N1").innerHTML = Num1;
            document.getElementById("N2").innerHTML = "Operacion cancelada";
        }
    }else{
        alert("Operacion cancelada"); // Muestro que se cancelo la operacion y cargo hasta donde se ingresaron numeros.
        document.getElementById("N1").innerHTML = "Operacion cancelada";
    }
}
function ingresarNumero(){
    let Num = prompt("Ingrese un numero positivo o 0 para salir"); // prompt solicitando numero
    while ( isNaN(Num) || Num<0 || Num=="" ){ // verifico que sean numeros  0 (salir)  arriba
        Num = prompt("Solo numeros positivos. Ingrese el primer numero o 0 para salir"); // Si no se cumplen las condiciones vuelvo a pedir un numero hasta que se cumplan
    }
    return Num;
}


