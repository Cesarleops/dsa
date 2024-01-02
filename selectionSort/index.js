function selectionSort(array) {
    var min;
    for (var i = 0; i < array.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j])
                min = j;
        }
        if (i !== min) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
console.log(selectionSort([89, 0, 1, 3, 6, 87]));
