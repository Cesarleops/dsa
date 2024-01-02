"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var Stack = /** @class */ (function () {
    function Stack(value) {
        var newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    Stack.prototype.pop = function () {
        if (!this.top) {
            return 'Ya no hay más nodos';
        }
        if (this.top && !this.top.next) {
            var removed = this.top;
            this.top = null;
            this.length--;
            return removed;
        }
        var top = this.top;
        this.top = top.next;
        top.next = null;
        return top;
    };
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
    };
    Stack.prototype.print = function () {
        var current = this.top;
        while (current) {
            console.log(current);
            current = current.next;
        }
    };
    return Stack;
}());
var myStack = new Stack(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.print();
