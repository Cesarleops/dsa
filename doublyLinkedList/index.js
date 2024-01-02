var DoubleNode = /** @class */ (function () {
    function DoubleNode(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return DoubleNode;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList(value) {
        var newNode = new DoubleNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    DoubleLinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    };
    DoubleLinkedList.prototype.push = function (value) {
        var newNode = new DoubleNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    };
    DoubleLinkedList.prototype.pop = function () {
        if (!this.head) {
            return undefined;
        }
        var toRemove = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return toRemove;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            toRemove.prev = null;
            this.length--;
            return toRemove;
        }
    };
    DoubleLinkedList.prototype.unshift = function (value) {
        var newNode = new DoubleNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    };
    DoubleLinkedList.prototype.shift = function () {
        if (!this.head) {
            return undefined;
        }
        var temp = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return temp;
        }
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return temp;
    };
    DoubleLinkedList.prototype.get = function (index) {
        if (index < 0 || index > this.length)
            return;
        var current = this.head;
        if (index > this.length / 2) {
            for (var i = 0; i < index; i++) {
                current = current.next;
            }
        }
        else {
            current = this.tail;
            for (var i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
        return current;
    };
    DoubleLinkedList.prototype.set = function (index, value) {
        var temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    };
    DoubleLinkedList.prototype.insert = function (index, value) {
        if (index === 0)
            return this.unshift(value);
        if (index === this.length)
            return this.push(value);
        var before = this.get(index - 1);
        if (before) {
            var newNode = new DoubleNode(value);
            var after = before.next;
            before.next = newNode;
            newNode.next = after;
            newNode.prev = before;
            after.prev = newNode;
            this.length++;
            return true;
        }
        else {
            return false;
        }
    };
    DoubleLinkedList.prototype.remove = function (index) {
        if (index === 0)
            return this.shift();
        if (index === this.length)
            return this.pop();
        var temp = this.get(index);
        if (temp) {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
            this.length--;
            return temp;
        }
    };
    return DoubleLinkedList;
}());
var firstDoubleList = new DoubleLinkedList(3);
firstDoubleList.push(4);
firstDoubleList.push(5);
firstDoubleList.push(6);
firstDoubleList.insert(2, 99);
console.log('3 ====> ', firstDoubleList.get(3));
console.log('remuevo', firstDoubleList.remove(3));
firstDoubleList.print();
