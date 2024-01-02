var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var temp = this.root;
            while (temp) {
                if (temp.value > value) {
                    if (!temp.left) {
                        temp.left = newNode;
                        return;
                    }
                    temp = temp.left;
                }
                else {
                    if (!temp.right) {
                        temp.right = newNode;
                        return;
                    }
                    temp = temp.right;
                }
            }
        }
    };
    Tree.prototype.contains = function (value) {
        if (!this.root)
            return false;
        if (this.root.value === value)
            return true;
        var temp = this.root;
        while (temp) {
            if (temp.value > value) {
                temp = temp.left;
            }
            else if (temp.value > value) {
                temp = temp.right;
            }
            else {
                return true;
            }
        }
        return false;
    };
    Tree.prototype.minimumValue = function () {
        if (!this.root)
            return false;
        if (!this.root.left)
            return this.root;
        var temp = this.root;
        while (temp && temp.left) {
            temp = temp.left;
        }
        return temp;
    };
    Tree.prototype.BFS = function () {
        var temp = this.root;
        var queue = [];
        var results = [];
        queue.push(temp);
        while (queue.length) {
            var current = queue.shift();
            results.push(current === null || current === void 0 ? void 0 : current.value);
            if (current === null || current === void 0 ? void 0 : current.left)
                queue.push(current.left);
            console.log('hey');
            if (current === null || current === void 0 ? void 0 : current.right)
                queue.push(current.right);
        }
        return results;
    };
    Tree.prototype.DFSPreOrder = function () {
        var results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left)
                traverse(currentNode.left);
            if (currentNode.right)
                traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    };
    return Tree;
}());
var myTree = new Tree();
myTree.insert(2);
myTree.insert(3);
myTree.insert(1);
myTree.insert(-3);
myTree.insert(4);
myTree.insert(18);
myTree.insert(0);
myTree.insert(28);
myTree.insert(48);
console.log(myTree.minimumValue());
myTree.insert(-48);
console.log(myTree.minimumValue());
console.log(myTree.BFS());
console.log(myTree.DFSPreOrder());
