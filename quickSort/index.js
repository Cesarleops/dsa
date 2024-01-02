function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
function pivot(array, pivotIndex, endIndex) {
    if (pivotIndex === void 0) { pivotIndex = 0; }
    if (endIndex === void 0) { endIndex = array.length - 1; }
    /**
 * Pivot se encarga de organizar parcialmente el array
 * dejando un punto de separacion(pivote), en donde los datos menores a este
 * quedaran a su izquierda y los mayores a su derecha cuando se quiere organizar
 * la lista de manera ascendente.
 *
 * Esta funcion sera llamada recursivamente por lo que el pivote constamente va a cambiar
 * asi como tambien el array en el que debe buscarlo.
 */
    var swapIndex = pivotIndex;
    for (var i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);
    return swapIndex;
}
function quickSort(array, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = array.length - 1; }
    console.log('left', left);
    console.log('right', right);
    if (left < right) {
        var pivotIndex = pivot(array, left, right);
        console.log(pivotIndex);
        quickSort(array, left, pivotIndex);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}
console.log(quickSort([5, 10, 2, 7, 8]));
