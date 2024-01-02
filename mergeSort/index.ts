
function merge(array1:number[], array2: number[]){

    const combinedArray = []
    let i = 0
    let j = 0
    while(i < array1.length && j< array2.length ){

        if(array1[i] > array2[j]){
            combinedArray.push(array2[j])
            j++
        } else {
            combinedArray.push(array1[i])
            i++

        }
    }
    while(i < array1.length){
        combinedArray.push(array1[i])
            i++
    }
    while(j < array2.length){
        combinedArray.push(array1[j])
            j++
    }
    return combinedArray
}

function mergeSort(array:number[]): number[] {

    if(array.length === 1) return array

    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
    
}