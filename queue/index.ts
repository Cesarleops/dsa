export {}


class Node<T> {
    value:T
    next: any
    constructor(value:T){
        this.value = value
        this.next = null
    }
}

class Queue<T> {
    first: Node<T>
    last: Node<T>
    length: number

    constructor(value:T){
        const newNode = new Node(value)
        this.last = newNode
        this.first = newNode
        this.length = 1

    }

    enqueue(value:T){   
        const newNode = new Node(value)

        if(!this.first){
            this.last = newNode
            this.first = newNode

        } else {    
            this.last.next = newNode
            this.last = newNode
            this.length++
        }
        
    


    }
    
    dequeue(){
        if(!this.first.next){
            this.first = null
            this.last = null
        }
        if(!this.first) return undefined
        let temp = this.first
        this.first = temp.next
        temp.next = null
        this.length--
        return temp

    }
}