var LinkedNode = /** @class */ (function () {
    function LinkedNode(value, next) {
        if (next === void 0) { next = null; }
        this.next = next;
        this.value = value;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var newNode = new LinkedNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.size = 1;
    }
    LinkedList.prototype.printList = function () {
        var current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    LinkedList.prototype.push = function (value) {
        var newNode = new LinkedNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    };
    LinkedList.prototype.unshift = function (value) {
        var newNode = new LinkedNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    };
    LinkedList.prototype.shift = function () {
        if (!this.head) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            return;
        }
        var current = this.head;
        this.head = this.head.next;
        console.log(this.head);
        console.log(current);
        current.next = null;
        this.size--;
        return current;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        var current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        var deletedNode = current.next;
        current.next = null;
        this.tail = current;
        this.size--;
        return deletedNode;
    };
    LinkedList.prototype.get = function (index) {
        var current = this.head;
        if (index < 0 && index > this.size)
            return;
        for (var i = 0; i < index; i++) {
            if (current) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
        }
        return current;
    };
    LinkedList.prototype.setValue = function (index, value) {
        var current = this.get(index);
        if (current) {
            current.value = value;
        }
        return true;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index === 0)
            return this.unshift(value);
        if (index === this.size)
            return this.push(value);
        if (index > 0 || index > this.size)
            return;
        var newNode = new LinkedNode(value);
        var temp = this.get(index - 1);
        newNode.next = temp === null || temp === void 0 ? void 0 : temp.next;
        temp.next = newNode;
        this.size++;
        return true;
    };
    LinkedList.prototype.remove = function (index) {
        var prev = this.get(index - 1);
        var toRemove = prev.next;
        prev.next = toRemove === null || toRemove === void 0 ? void 0 : toRemove.next;
        toRemove.next = null;
        return toRemove;
    };
    LinkedList.prototype.reverse = function () {
        var current = this.head;
        var prev = null;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    };
    LinkedList.prototype.findMiddle = function () {
        var slow = this.head;
        var fast = this.head;
        while (fast & fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };
    LinkedList.prototype.hasLoop = function () {
        var slow = this.head;
        var fast = this.head;
        while (fast & fast.next) {
            slow = slow === null || slow === void 0 ? void 0 : slow.next;
            fast = fast === null || fast === void 0 ? void 0 : fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    };
    LinkedList.prototype.kthFromEnd = function (k) {
        if (this.head === null)
            return;
        var fast = this.head;
        var slow = this.head;
        for (var i = 0; i < k; i++) {
            fast = fast.next;
        }
        console.log(fast);
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        console.log(slow);
        return slow;
    };
    LinkedList.prototype.partitionList = function (n) {
        var _a;
        var minorList = new LinkedNode(0);
        var greaterList = new LinkedNode(0);
        var minor = minorList;
        var greater = greaterList;
        var current = this.head;
        while (current !== null) {
            if (current.value > n) {
                greater.next = current;
                greater = greater.next;
            }
            else {
                minor.next = current;
                minor = minor.next;
            }
            current = current.next;
        }
        greater.next = null;
        minor.next = greaterList.next;
        console.log(minorList);
        console.log((_a = minorList.next) === null || _a === void 0 ? void 0 : _a.next);
        this.head = minorList.next;
        this.printList();
    };
    LinkedList.prototype.removeDuplicates = function () {
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
        var noDups = new Set();
        var prev = null;
        var current = this.head;
        while (current) {
            if (noDups.has(current.value)) {
                prev.next = current.next;
                this.length--;
            }
            else {
                noDups.add(current.value);
                prev = current;
            }
            current = current.next;
        }
    };
    return LinkedList;
}());
var myFirstLinkedList = new LinkedList(1);
myFirstLinkedList.push(3);
myFirstLinkedList.push(4);
myFirstLinkedList.push(6);
myFirstLinkedList.push(5);
myFirstLinkedList.push(6);
myFirstLinkedList.push(6);
myFirstLinkedList.shift();
// myFirstLinkedList.pop()
// myFirstLinkedList.kthFromEnd(5)
// myFirstLinkedList.partitionList(3)
// myFirstLinkedList.removeDuplicates()
