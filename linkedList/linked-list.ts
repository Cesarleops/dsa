
class LinkedNode<T> {
    public next: LinkedNode<T> | null
    public value: T
    constructor(value:T ,next=null){
        this.next = next
        this.value = value
    }
}

class LinkedList<T> {
    public head: LinkedNode<T> | null
    public tail: LinkedNode<T> | null
    public size: number 
    constructor(value: T){
        const newNode = new LinkedNode<T>(value)
        this.head = newNode
        this.tail = newNode
        this.size = 1
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    push(value:T){
        const newNode = new LinkedNode<T>(value)
        if (this.head === null) {
            this.head = newNode
            this.tail= this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return this

    }

    unshift(value: T){
        const newNode = new LinkedNode<T>(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    shift(){

        if(!this.head){
            return
        } 
        if(this.head.next === null){
            this.head=null
            this.tail = null
            return
        }
        let current = this.head
        this.head = this.head.next
        console.log(this.head)
        console.log(current)
        current.next = null
        this.size--
        return current


    }
    pop(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
            this.tail = null
            this.size--
           return
        }
        let current = this.head
        while(current.next !== this.tail){
            current = current.next
        }
        const deletedNode = current.next
        current.next = null
        this.tail = current
        this.size--
        return deletedNode
     
    }

    get(index:number){
        let current = this.head
        if(index <0 && index > this.size) return
        for(let i=0; i < index;i++){
            if(current){
                current = current?.next
            }
           
        }
        return current
    }
    
    setValue(index:number, value:T){
        const current = this.get(index)
        if(current){
            current.value = value
        }
        return true
    }

    insert(index: number,value:T){
        if(index === 0) return this.unshift(value)
        if(index === this.size) return this.push(value)
        if(index > 0 || index > this.size) return
        const newNode = new LinkedNode(value)
        const temp = this.get(index-1)
        newNode.next = temp?.next
        temp.next = newNode
        this.size++
        return true


    }
    remove(index:number){
        const prev = this.get(index-1)
        const toRemove = prev.next
        prev.next = toRemove?.next
        toRemove.next = null
        return toRemove
    }

    reverse(){
        let current = this.head
        let prev = null
        let next = null
        while(current != null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head
        while(fast & fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    hasLoop(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow!.next
            fast = fast.next.next
            if(slow === fast){
                return true
            }
        }
        return false
    
    }

    kthFromEnd(k:number){
        if (this.head === null) return;
        let fast = this.head
        let slow = this.head
        for(let i= 0;i<k; i++){
            fast= fast.next
        }
        console.log(fast)
        while(fast){
            slow = slow.next
            fast = fast.next
        }
        console.log(slow)
        return slow
    }

    partitionList(n:number){
        let minorList = new LinkedNode(0)
        let greaterList = new LinkedNode(0)
        let minor = minorList
        let greater = greaterList
        let current = this.head
        while(current !== null){
            if(current.value > n){
                greater.next = current
                greater = greater.next
            } else {
                minor.next = current
                minor = minor.next
            }
            current = current.next
        }
        greater.next = null
        minor.next = greaterList.next
        console.log(minorList)
        console.log(minorList.next?.next)
        this.head = minorList.next  

        this.printList()

    }

    removeDuplicates(){

        // let current = this.head
        // const noDups = new Set()
        // while(current){
        //     noDups.add(current.value)
        //     current = current.next
        // }
       
        // current = this.head
      
        // for(const element of noDups){
        //     console.log('entre')
        //     console.log(element)
        //     current.value = element
        //     current = current?.next

        // }
        // this.printList()

        
            const noDups = new Set()
            let prev = null
            let current = this.head
            while(current){
                if(noDups.has(current.value)){
                    prev.next = current.next
                    this.length--
            
                    
                } else {
                    noDups.add(current.value)
                    prev = current
                   
                }
                 current = current.next
            }
            
        

    }
}

const myFirstLinkedList = new LinkedList<number>(1)
myFirstLinkedList.push(3)
myFirstLinkedList.push(4)
myFirstLinkedList.push(6)
myFirstLinkedList.push(5)
myFirstLinkedList.push(6)
myFirstLinkedList.push(6)
myFirstLinkedList.shift()
// myFirstLinkedList.pop()
// myFirstLinkedList.kthFromEnd(5)
// myFirstLinkedList.partitionList(3)
// myFirstLinkedList.removeDuplicates()




