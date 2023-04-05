document.addEventListener("DOMContentLoaded", function() {
    //esto permite que se cargue primero la pagina y luego los prompt, permitiendo que al final modifique el valor de los <p> N1/N2/Total
    OrdenarNumeros();
});

function OrdenarNumeros(){
    const arrayNumeros = [];
    let salir = false;
    for ( let i = 0 ; i < 5 ; i ++) {
        ingresarNumero(arrayNumeros);
    }
    const orden = tipoOrden();
    switch (orden){
        case "ASC":
            mostrarAscendente(arrayNumeros);
            break;
        case "DES":
            mostrarDescendente(arrayNumeros);
            break;
        case "SALIR":
            alert("Operacion Cancelada");
            document.getElementById("N1").innerHTML = "Operacion cancelada";
            break;
    }    
}

function ingresarNumero(arrayNumeros){
    var num = prompt("Ingrese un numero positivo"); // prompt solicitando numero
    while ( isNaN(num) || num<0 || num==""){ // verifico que sean numeros positivos
        num = prompt("Solo numeros positivos. Ingrese un numero"); // Si no se cumplen las condiciones vuelvo a pedir un numero hasta que se cumplan
    }
    arrayNumeros.push(num);
}

function tipoOrden(){
    let orden = prompt("Ingrese el tipo de orden 'ASC' o 'DES' o 'SALIR' para salir");
    while ( orden != "ASC" && orden != "DES" && orden != "SALIR" ){
        orden = prompt("Operacion incorrecta. Ingrese el tipo de orden 'ASC' o 'DES' o 'SALIR' para salir");    
    }
    return orden
}

function mostrarAscendente(arrayNumeros){
    arrayNumeros.sort(function (a,b){//esta funcion permite ordenar los numeros con mas de 1 caracter, ya que para el sort el numero 11 viene antes que el 2.
        return a -b; // los devuelve en orden ascendente
    });
    alert(arrayNumeros);
    for ( let i = 0 ; i < 5 ; i++){
        document.getElementById("N"+(i+1)).innerHTML = arrayNumeros[i];
    }
    document.getElementById("TipoOrden").innerHTML = "Ascendente";
}

function mostrarDescendente(arrayNumeros){
    arrayNumeros.sort(function (a,b){//esta funcion permite ordenar los numeros con mas de 1 caracter, ya que para el sort el numero 11 viene antes que el 2.
        return b - a; // los devuelve en orden descendente
    });
    alert(arrayNumeros);
    for ( let i = 0 ; i < 5 ; i++){
        document.getElementById("N"+(i+1)).innerHTML = arrayNumeros[i];
    }
    document.getElementById("TipoOrden").innerHTML = "Descendente";
}