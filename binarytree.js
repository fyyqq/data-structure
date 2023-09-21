
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
        this.root = this.removeData(this.root, data);
    }
    removeData(node, data) {
        if (!node) {
            console.log(`Data ${data} not found!`);
            return node;
        }
        
        if (data < node.data) {
            node.left = this.removeData(node.left, data);
        } else if (data > node.data) {
            node.right = this.removeData(node.right, data); 
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                if (this.root.data === data) {
                    this.findMin(node.left, data);
                } else {
                    const upper = node.right;
                    node = node.left;
                    node.right = upper;
                }
            }
        }
        return node;
    }
    findMin(node, data) {
        if (node.right !== null) {
            let current = node;
            while (node) {
                if (node.right.right === null) {
                    current = node;
                    break;
                }
                node = node.right;
            }
            if (current.right !== null && current.left === null) {
                this.root.data = current.right.data;
                current.right = null;
            } else if (current.right !== null && current.left !== null) {
                this.root.data = current.right.data;
                current.right = current.right.left;
            }
            return current;
        }
    }
}

const binaryTable = new BinaryTable();
binaryTable.insert(50);
binaryTable.insert(30);
binaryTable.insert(70);
binaryTable.insert(20);
binaryTable.insert(40);
binaryTable.insert(60);
binaryTable.insert(80);
binaryTable.insert(15);
binaryTable.insert(25);
binaryTable.insert(35);
binaryTable.insert(45);
binaryTable.insert(55);
binaryTable.insert(65);
binaryTable.insert(75);
binaryTable.insert(85);
binaryTable.insert(10);
binaryTable.insert(5);
binaryTable.insert(95);
binaryTable.insert(100);
binaryTable.insert(90);
binaryTable.insert(70);
binaryTable.insert(45);
binaryTable.insert(25);
binaryTable.insert(15);
binaryTable.insert(5);
// console.log(binaryTable.find(5));
// console.log(binaryTable.get());
// binaryTable.replace(2, 5);
binaryTable.remove(50);
binaryTable.remove(45);
binaryTable.remove(45);
binaryTable.remove(40);
// binaryTable.remove(35);
// console.log('-------------------');
console.log(binaryTable.root);

// insert 😈
// Search 😈
// Get data 😈
// Update 😈
// Delete