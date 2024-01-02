
function bubbleSort(array:number[]){

    for(let i = array.length; i >= 1; i--){
        for(let j = 0; j<array.length;j++){
            let current = array[j]
            let next = array[j+1]
            console.info(next)
            if(current > next){
                array[j] = next
                array[j+1] = current
            }
        }
    }
   

    return array

}

console.log(bubbleSort([10,5,4,3]))


