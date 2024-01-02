class Graph {
    adjencyList: Record<string,any[]>
    constructor(){
        this.adjencyList = {}
    }

    addVertex(vertex:any){

        if(this.adjencyList[vertex]){
            return
        }
        this.adjencyList[vertex] = []
    }

    addEdge(vertex:string, vertex2:string){
        if(this.adjencyList[vertex] && this.adjencyList[vertex2]){
            this.adjencyList[vertex].push(vertex2)
            this.adjencyList[vertex2].push(vertex)
        }
       

    }

    removeEdge(vertex1: string, vertex2:string){
        if(this.adjencyList[vertex1] && this.adjencyList[vertex2]){
            this.adjencyList[vertex1] = this.adjencyList[vertex1].filter((edge) => edge !== vertex2 )
            this.adjencyList[vertex2] = this.adjencyList[vertex1].filter((edge) => edge !== vertex1 )
        }


    }
    
    removeVertex(vertex:string){
        
        while(this.adjencyList[vertex].length){
            let temp = this.adjencyList[vertex].pop()
            console.info('===>',temp)
            this.adjencyList[temp] = this.adjencyList[temp].filter((edge) => edge !== vertex)
            console.info(myGraph)
        }
        console.info(this.adjencyList[vertex])
        delete this.adjencyList[vertex]
    }
}

const myGraph = new Graph()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addEdge('A','B')
myGraph.addEdge('B','C')
myGraph.addEdge('A','C')
console.info(myGraph)
// myGraph.removeEdge('A','B')
console.info(myGraph)
myGraph.removeVertex('C')
console.info(myGraph)



