function bubbleSort(array) {
    for (var i = array.length; i >= 1; i--) {
        for (var j = 0; j < array.length; j++) {
            var current = array[j];
            var next = array[j + 1];
            console.info(next);
            if (current > next) {
                array[j] = next;
                array[j + 1] = current;
            }
        }
    }
    return array;
}
console.log(bubbleSort([10, 5, 4, 3]));
