var Graph = /** @class */ (function () {
    function Graph() {
        this.adjencyList = {};
    }
    Graph.prototype.addVertex = function (vertex) {
        if (this.adjencyList[vertex]) {
            return;
        }
        this.adjencyList[vertex] = [];
    };
    Graph.prototype.addEdge = function (vertex, vertex2) {
        this.adjencyList[vertex].push(vertex2);
        this.adjencyList[vertex2].push(vertex);
    };
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(function (edge) { return edge !== vertex2; });
        this.adjencyList[vertex2] = this.adjencyList[vertex1].filter(function (edge) { return edge !== vertex1; });
    };
    Graph.prototype.removeVertex = function (vertex) {
        while (this.adjencyList[vertex].length) {
            var temp = this.adjencyList[vertex].pop();
            console.info('===>', temp);
            this.adjencyList[temp] = this.adjencyList[temp].filter(function (edge) { return edge !== vertex; });
            console.info(myGraph);
        }
        console.info(this.adjencyList[vertex]);
        delete this.adjencyList[vertex];
    };
    return Graph;
}());
var myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'C');
myGraph.addEdge('A', 'C');
console.info(myGraph);
// myGraph.removeEdge('A','B')
console.info(myGraph);
myGraph.removeVertex('C');
console.info(myGraph);
