
function selectionSort(array: number[]){
    let min 
    for(let i = 0; i < array.length-1; i++){
        min = i
        for(let j = i+1; j < array.length; j++){
            if(array[min] > array[j]) min = j
        }
        if(i !== min){
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
       
    }

    return array 

}

console.log(selectionSort([89,0,1,3,6,87]))