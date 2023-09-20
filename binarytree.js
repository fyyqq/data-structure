
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTable {
    constructor() {
        this.root = null;
    }
    insert(item) {
        const newNode = new TreeNode(item);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertMoreNodes(this.root, newNode);
        }
    }
    insertMoreNodes(nodes, newNode) {
        if (newNode.data < nodes.data) {
            if (!nodes.left) {
                nodes.left = newNode;
            } else {
                return this.insertMoreNodes(nodes.left, newNode);
            }
        } else {
            if (!nodes.right) {
                nodes.right = newNode;
            } else {
                return this.insertMoreNodes(nodes.right, newNode);
            }
        }
    }
    find(item) {
        if (!this.root) {
            return `Node isn't created yet`;
        } else {
            return this.findNodes(this.root, item);
        }
    }
    findNodes(nodes, item) {
        if (!nodes) {
            return `Data: ${item} not found!`;
        }

        if (nodes.data === item) {
            return `Data: ${item}`;
        }

        if (item < nodes.data) {
            return this.findNodes(nodes.left, item);
        } else if (item > nodes.data) {
            return this.findNodes(nodes.right, item);
        }
    }
    get() {
        const items = [];
        this.getData(this.root, items);
        return items;
    }
    getData(nodes, items) {
        if (!nodes) {
            return `Node isn't created yet`;
        } else {
            this.getData(nodes.left, items);
            items.push(nodes.data);
            this.getData(nodes.right, items);
        }
    }
    replace(data, newData) {
        if (!this.root) {
            console.log(`Node isn't created yet`);
            return;
        }
        return this.update(this.root, data, newData)
    }
    update(nodes, data, newData) {
        if (!nodes) {
            console.log(`Data ${data} not found!`);
            return;
        }

        if (nodes.data === data) {
            nodes.data = newData;
            return;
        }

        if (data < nodes.data) {
            return this.update(nodes.left, data, newData);
        } else {
            return this.update(nodes.right, data, newData);
        }
    }
    remove(data) {
        if (!this.root) {
            console.log(`Node isn't created yet`);
            return;
        }
        return this.removeData(this.root, data);
    }
    removeData(nodes, data) {
        if (!nodes) { 
            console.log(`Data ${data} not found!`);
            return;
        }

        if (nodes.data === data) {
            return this.root = null;
        } else if (nodes.left.data === data) {
            return this.root.left = null;
        } else if (nodes.right.data === data) {
            return this.root.right = null;
        }

        if (data < nodes.data) {
            return this.removeData(nodes.left, data);
        } else {
            return this.removeData(nodes.right, data);
        }
    }
}

const binaryTable = new BinaryTable();
binaryTable.insert(5);
binaryTable.insert(3);
binaryTable.insert(4);
binaryTable.insert(2);
binaryTable.insert(7);
binaryTable.insert(6);
binaryTable.insert(8);
binaryTable.insert(1);
// console.log(binaryTable.find(5));
// console.log(binaryTable.get());
// binaryTable.replace(2, 5);
// binaryTable.remove(7);
console.log(binaryTable.root);

// insert 😈
// Search 😈
// Get data 😈
// Update 😈
// Delete 😈