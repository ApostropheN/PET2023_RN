demostracion();

function mostrarArray(arrayDemo){
    document.write("[ " + arrayDemo + "]<br><br>");
}

function ejemploFor(arrayDemo){
    document.write("FOR<br>For nos permite recorrer un array, solo debemos indicar cuando termina.<br>");
    for ( i = 0 ; i < arrayDemo.length ; i++){
        document.write("Indice " + i + " del array: " + arrayDemo[i] + "<br>");
    }
    document.write("<br><br>");
}

function ejemploForEach(arrayDemo){
    document.write("For Each<br>ForEach tambien nos permite recorrer un array, salvo que al ser un metodo de un array no es necesario indicarle cuando terminar. El resultado es el mismo, solo varia el codigo<br>");
    arrayDemo.forEach( (numero,indice) => {
        document.write("Indice " + indice + " del array: " + numero + "<br>");
    });
    document.write("<br><br>");          
}

function ejemploMap(arrayDemo){
    document.write("Map<br>El metodo map permite crear un nuevo array en base a lo indicado a la funcion del map. En este caso se generara un array con el valor multiplicado *3 respecto al array base<br>");
    const nuevoArray = arrayDemo.map(numero => 
                                        numero * 3);
    document.write("El array resultante es el siguiente: [ " + nuevoArray + " ]");
    document.write("<br><br><br>");   
}

function ejemploFilter(arrayDemo){
    document.write("Filter<br>El metodo filter nos permite crear un nuevo array con todos los elementos que cumplan cierta funcion. En este caso el filtro seran los numeros menores a 90<br>");
    const nuevoArray = arrayDemo.filter(numero => numero < 90);
    document.write("El array resultante es el siguiente: [ " + nuevoArray + " ]");
    document.write("<br><br><br>");  
}

function ejemploWhile(arrayDemo){
    document.write("While<br>La funcion while nos permite crear un bucle que ejecuta los comandos establecidos siempre y cuando este presente una condicion, cada vez que se terminan de ejercutar los comandos se vuelve a evaluar dicha condicion. En este caso vamos a ir recorriendo el array mientras que el valor contenido no sea un multiplo de 7.<br>");
    i = 0;
    while ( arrayDemo[i] % 7 ){
        document.write("Indice " + i + " del array: " + arrayDemo[i] + "<br>");
        +i++;
    }
    document.write("Como se puede ver, solo muestra hasta el 92 porque en la posicion siguiente se encontraba el 35, al evaluar y ver que se dejo de cumplir la condicion de que los numeros no sean multiplos de 7 sale del bucle.<br><br><br>");
}

function ejemploPush(arrayDemo){
    document.write("Push<br>El metodo push agrega uno o mas elmentos al final de un array y devuelve la nueva longitud del array. Para este ejemplo voy a utilizar un arreglo igual y agregarle los valores ( 8 , 1230 ) al arreglo.<br>");
    const nuevoArray = [...arrayDemo];
    document.write("El array resultante con una longitud de " + nuevoArray.push(8,1230) + " quedara asi: [ " + nuevoArray + " ]");
    document.write("<br><br><br>"); 
}

function ejemploReduce(arrayDemo){
    document.write("Reduce<br>El metodo reduce devuelve un unico valor, ejecuta una fuccion de reduccion en cada elemento del array. En este ejemplo vamos a sumar mostrar 2 arrays reducidos: el primer array es la suma de todos los numeros y el segundo la suma de todos los numeros impares.<br>");
    const sumaTotal = arrayDemo.reduce( (acumulador, valorElemento) => acumulador + valorElemento,0);
    const sumaImpares = arrayDemo.reduce( (acumulador, valorElemento) => {
                                            if ( valorElemento % 2 ) {
                                                return acumulador += valorElemento;
                                            } else {
                                                return acumulador += 0;
                                            }
    },0);
    document.write("El resultado de la funcion reduce para el primer ejemplo quedaria asi: " + sumaTotal + "<br>");
    document.write("El resultado de la funcion reduce para el segundo ejemplo quedaria asi: " + sumaImpares);
    document.write("<br><br><br>"); 
}

function ejemploSplice(arrayDemo){
    document.write("Splice<br>El metodo splice cambia el contenido del array, ya sea borrandolos o agregando nuevos. Se puede la posicion inicial, la cantidad de elementos a borrar y los elementos de reemplazo. Para este ejemplo estaremos reemplazando el valor (1240) en la tercera posicion y agregando (8) en la quinta posicion.<br>")
    const nuevoArray = [...arrayDemo];
    nuevoArray.splice(2,1,1240);
    nuevoArray.splice(4,0,8);
    document.write("El nuevo array quedara de la siguiente manera: [ " + nuevoArray + " ]");
    document.write("<br><br><br>"); 
}

function ejemploSpreadOperator(arrayDemo){
    document.write("Spread operator<br>El operador spread operator nos permite utilizar elementos iterables (entre ellos un array) y los expande como elementos individuales, nos permite clonar arrays (los arrays clonados en otros ejemplos se generar con un spread operator) y tambien nos permite insertar los elementos de un array dentro de otro. Para este ejemplo se insertara el array [ 4 , 120 , 9 , 5] al array demo.<br>");
    const nuevoArray = [...arrayDemo];
    const arraySumado = [ 4 , 120 , 9 , 5 ];
    const arrayCombinado = [...nuevoArray, ...arraySumado];
    document.write("El array resultante se ve de la siguiente manera: [ " + arrayCombinado + " ]");
}

function demostracion(){
    document.write("Antes de comenzar voy a mostrar el array con el que vamos a estar trabajando, esta compuesto de la siguiente manera:<br><br>");
    const arrayDemo = [ 446, 4 , 1 , 92 , 35 , 237  ];
    mostrarArray(arrayDemo);
    ejemploFor(arrayDemo);
    ejemploForEach(arrayDemo);
    ejemploMap(arrayDemo);
    ejemploFilter(arrayDemo);
    ejemploWhile(arrayDemo);
    ejemploPush(arrayDemo);
    ejemploReduce(arrayDemo);
    ejemploSplice(arrayDemo);
    ejemploSpreadOperator(arrayDemo);
}