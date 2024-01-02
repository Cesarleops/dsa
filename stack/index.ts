
export {}
class Node<T> {
    public value:T
    public next: any
    constructor(value:T){
        this.value = value
        this.next = null
    }
}


class Stack<T> {
    top: Node<T>
    length: number
    constructor(value:T){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    pop(){

        if(!this.top){
            return 'Ya no hay más nodos'
        }
        if(this.top && !this.top.next){
            const removed = this.top
            this.top = null
            this.length--
            return removed
        }
        const top = this.top
        this.top = top.next
        top.next = null
        return top

    }
    push(value:T){
        const newNode = new Node(value)
        if(!this.top){
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
    }

    print(){
        let current = this.top
        while(current){
            console.log(current)
            current = current.next
        }
    }
}

const myStack = new Stack(2)

myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.pop()
myStack.print()

