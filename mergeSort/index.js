function merge(array1, array2) {
    var combinedArray = [];
    var i = 0;
    var j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {
            combinedArray.push(array2[j]);
            j++;
        }
        else {
            combinedArray.push(array1[i]);
            i++;
        }
    }
    while (i < array1.length) {
        combinedArray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combinedArray.push(array1[j]);
        j++;
    }
    return combinedArray;
}
console.log(merge([10, 3, 9], [4, 5, 6, 0]));
function mergeSort(array) {
    merge([10, 3, 9], [4, 5, 6, 0]);
}
