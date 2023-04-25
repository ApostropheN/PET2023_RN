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
            document.getElementById("Resultados").innerHTML = "<a>Operacion cancelada</a>";
            break;
    }    
}

function ingresarNumero(arrayNumeros){
    var num = prompt("Ingrese un numero positivo o cero para salir"); // prompt solicitando numero
    while ( isNaN(num) || num<=0 || num==""){ // verifico que sean numeros positivos
        num = prompt("Solo numeros mayores o igual a cero. Ingrese un numero"); // Si no se cumplen las condiciones vuelvo a pedir un numero hasta que se cumplan
    }
    arrayNumeros.push(Number(num));
}

function tipoOrden(){
    let orden = prompt("Ingrese el tipo de orden 'ASC' o 'DES' o 'SALIR' para salir");
    while ( orden != "ASC" && orden != "DES" && orden != "SALIR" ){
        orden = prompt("Operacion incorrecta. Ingrese el tipo de orden 'ASC' o 'DES' o 'SALIR' para salir");    
    }
    return orden
}

function mostrarAscendente(arrayNumeros){
    document.getElementById("Resultados").innerHTML = "<a>El Array ingresado es: [ " + arrayNumeros + " ]</a><br>";
    for (var  j = 0; j < arrayNumeros.length -1 ; j++){//Bubble sort
        for (var i = 0 ; i < arrayNumeros.length -1; i++ ){
            if ( arrayNumeros[i] > arrayNumeros[i+1] ){//Verifico si el siguiente tiene un valor superior
                cambio = arrayNumeros[i+1];//Si es superior transfiero el valor a cambio y luego a la siguiente posicion en el array
                arrayNumeros [i+1] =  arrayNumeros[i];
                arrayNumeros[i] = cambio;
            }
        }
    }
    alert(arrayNumeros);
    document.getElementById("Resultados").innerHTML += "<a>El Array ordenado es: [ " + arrayNumeros + " ]</a><br>\
                                                        <a>El orden es: Ascendente</a>";
}

function mostrarDescendente(arrayNumeros){
    document.getElementById("Resultados").innerHTML = "<a>El Array ingresado es: [ " + arrayNumeros + " ]</a><br>";
    for (var  j = 0; j < arrayNumeros.length -1 ; j++){ //Bubble sort desc
        for (var i = 0 ; i < arrayNumeros.length -1; i++ ){
            if ( arrayNumeros[i] < arrayNumeros[i+1] ){
                cambio = arrayNumeros[i+1];
                arrayNumeros [i+1] =  arrayNumeros[i];
                arrayNumeros[i] = cambio;
            }
        }
    }
    alert(arrayNumeros);
    document.getElementById("Resultados").innerHTML += "<a>El Array ordenado es: [ " + arrayNumeros + " ]</a><br>\
                                                        <a>El orden es: Ascendente</a>";
}