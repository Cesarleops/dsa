
class DoubleNode<T> {
    public value: T
    public next:any
    public prev: any
    constructor(value:T){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList<T>{
    private head: DoubleNode<T>
    private tail: DoubleNode<T>
    private length: number
    constructor(value:T){
        const newNode = new DoubleNode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    print(){
        let current = this.head
        while(current){
            console.log(current)
            current = current.next
        }
    }

    push(value:T){
        const newNode = new DoubleNode(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this
    }

    pop(){
        if(!this.head){
            return undefined
        }
        const toRemove = this.tail
        if(this.length===1){
            this.head = null
            this.tail = null
            return toRemove
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            toRemove.prev = null
            this.length--
            return toRemove
        }
     
       
    }

    unshift(value:T){
        
        const newNode = new DoubleNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
           
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
       
        this.length++
        return this
    }

    shift(){
      if(!this.head){
        return undefined
      }
      const temp = this.head
      if(!this.head.next){
        this.head = null
        this.tail = null    
        return temp
      }
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
      this.length--
      return temp

    }

    get(index:number){
        if(index < 0 || index > this.length) return
        let current = this.head
        if(index > this.length / 2){
            for(let i = 0; i< index; i++){
                current = current.next
            }
        } else {
            current = this.tail
            for(let i = this.length-1; i > index; i--){
                current = current.prev   
            }
        }
        return current

    }

    set(index:number,value:T){
        const temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index: number, value: T){
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        let before = this.get(index-1)
        if(before){
            const newNode = new DoubleNode(value)
            const after = before.next
            before.next = newNode
            newNode.next = after
            newNode.prev = before
            after.prev = newNode
            this.length++
            return true
        } else {
            return false
        }
    }

    remove(index:number){
        if(index === 0) return this.shift()
        if(index ===  this.length) return this.pop()
        let temp = this.get(index)
        if(temp){
            temp.prev.next = temp.next
            temp.next.prev = temp.prev
            temp.next = null
            temp.prev = null
            this.length--
            return temp
        }
    }
}

const firstDoubleList = new DoubleLinkedList(3)

firstDoubleList.push(4)
firstDoubleList.push(5)
firstDoubleList.push(6)
firstDoubleList.insert(2, 99)
firstDoubleList.print()



