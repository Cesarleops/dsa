function insertionSort(array) {
    /*
    Dada una lista, nos ubicamos en el segundo elemento,
    comparamos si el elemento anterior es mayor, si la condicion se cumple
    se intercambian las posiciones, y se repite el proceso con el elemento siguiente.

    Por lo tanto hay que recorrer desde el indice 1 hasta el final, y por cada elemento
    hay que hacer un recorrido por todos los elementos anteriores para revisar cuales son menores
    y realizar los intercambios.

    Para no perder el elemento que estoy comparando, debo crear una variable
    que lo represente, y hacer las comparaciones con ellas, ya que el elemento
    array[i] va a cambiar constantemente.
    */
    for (var i = 1; i < array.length; i++) {
        var temp = array[i];
        var j = i - 1;
        for (j; array[j] > temp && j >= 0; j--) {
            /*
            Las posiciones no se pueden intercambiar aqui,porque
            cuando j se decrementa, el valor de array[j] cambia
            y se va a modificar repetitivamente el valor de array[i]
            */
            array[j + 1] = array[j];
            /**
             * Cuando el valor anterior es mayor al elemento que estamos comparando
             * se mueve a la derecha para crear el espacio y que el elemento se pueda
             * ubicar correctamente.
             */
        }
        array[j + 1] = temp;
        /*
            Con el espacio creado, simplemente se asigna el elemento a la posicion
            correcta

            Esto funciona gracias a que j se va moviendo hacia la izquierda cada que el elemento
            anterior es mayor que temp.(elemento a comparar)
        */
    }
    return array;
}
console.log(insertionSort([4, 2, 7, 1, 5]));
