
function swap(array:number[], firstIndex: number, secondIndex: number){
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}
function pivot(array:number[], pivotIndex:number = 0, endIndex: number = array.length-1){
       /**
    * Pivot se encarga de organizar parcialmente el array
    * dejando un punto de separacion(pivote), en donde los datos menores a este
    * quedaran a su izquierda y los mayores a su derecha cuando se quiere organizar
    * la lista de manera ascendente.
    * 
    * Esta funcion sera llamada recursivamente por lo que el pivote constamente va a cambiar
    * asi como tambien el array en el que debe buscarlo.
    */
    let swapIndex = pivotIndex

    for(let i = pivotIndex+1; i <= endIndex;i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array,pivotIndex, swapIndex)
    return swapIndex

}

function quickSort(array:number[], left:number = 0, right:number = array.length-1){
    console.log('left',left)
    console.log('right',right) 
    if(left < right){
        let pivotIndex = pivot(array, left, right) 
        quickSort(array, left, pivotIndex) 
        quickSort(array,pivotIndex+1,right) 
    }
    return array

}
console.log(quickSort([5,10,2,7,8]))

