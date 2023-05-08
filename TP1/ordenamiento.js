ordenarNumeros();

function ingresarNumero(arrayNumeros){
    let num = "";
    while ( isNaN(num) || num<=0 || num.trim()==""){ // verifico que sean numeros positivos
        num = prompt("Ingrese un numero positivo"); // prompt solicitando numero
    }
    arrayNumeros.push(Number(num));
}

function mostrarAscendente(arrayNumeros){
    document.write("El Array original: " + arrayNumeros + "<br>");
    const arrayOrdenado = [];
    while (arrayNumeros.length > 0){
        arrayOrdenado.push(Math.min(...arrayNumeros)); // Busco el valor minimo de arrayNumeros, lo ingreso en el array ordenado
        arrayNumeros.splice(arrayNumeros.indexOf(Math.min(...arrayNumeros)),1);// Busco la posicion en la que se encuentra dicho valor minimo y procedo a quitarlo, reduciendo el tamaño del array.
    }
    alert("El array se ordeno y quedo de la siguiente manera: " + arrayOrdenado);
    document.write("El Array ordenado: " + arrayOrdenado + "<br>"); 
}

function ordenarNumeros(){
    const arrayNumeros = [];
    for ( let i = 0 ; i < 5 ; i ++) {
        ingresarNumero(arrayNumeros);
    }
    mostrarAscendente(arrayNumeros);
}

