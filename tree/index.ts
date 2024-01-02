

class TreeNode<T> {
    value:T
    left: TreeNode<T> | null
    right: TreeNode<T> | null
    constructor(value:T){
        this.value = value
        this.right = null
        this.left = null
    }
}
class Tree<T> {
    root: TreeNode<T> | null
    constructor(){
        this.root = null
    }

    insert(value:T){
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
        } else {
          
            let temp = this.root
            while(temp){
                if(temp.value > value){
                    if(!temp.left){
                            temp.left = newNode
                            return
                    } 
                    temp = temp.left  

                } else {
                    if(!temp.right){
                        temp.right = newNode
                        return
                    } 
                    temp = temp.right

                }
            }
       
        }
    }

    contains(value:T){

        if(!this.root) return false
        if(this.root.value === value) return true
        let temp: TreeNode<T> | null = this.root
        while(temp){
            if(temp.value > value){
                temp = temp.left

            } else if(temp.value > value) {
                 temp = temp.right
            } else {
                return true
            }
        }
       return false

        
    }

    minimumValue(){
        if(!this.root) return false
        if(!this.root.left) return this.root
        let temp = this.root
        while(temp && temp.left){
            temp = temp.left
        }
        return temp

    }

    BFS(){
        let temp = this.root
        let queue = []
        let results = []
        queue.push(temp)
        while(queue.length){
            let current = queue.shift()
            results.push(current?.value)
            if(current?.left) queue.push(current.left)
            if(current?.right) queue.push(current.right)
        }
        return results

      
    }

    DFSPreOrder(){

        let results: T[] = []
        function traverse(currentNode: TreeNode<T>){
            results.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root as TreeNode<T>)
        return results
    }

    DFSPostOrder(){
        let results: T[] = []
        function traverse(currentNode: TreeNode<T>){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value)

        }
        traverse(this.root as TreeNode<T>)
        return results
    }

    DFSInOrder(){
        let results: T[] = []
        function traverse(currentNode: TreeNode<T>){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right)

        }
        traverse(this.root as TreeNode<T>)
        return results
    }
}

const myTree = new Tree()

myTree.insert(2)
myTree.insert(3)
myTree.insert(1)
myTree.insert(-3)
myTree.insert(4)
myTree.insert(18)
myTree.insert(0)
myTree.insert(28)
myTree.insert(48)
console.log(myTree.minimumValue())
myTree.insert(-48)
console.log(myTree.minimumValue())
console.log(myTree.BFS())
console.log(myTree.DFSPreOrder())



