
class Graph {
    constructor() {
        this.nodes = new Map();
    }
    
    addNode(node) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, []);
            return;
        }
    }
    
    addEdge(node1, node2) {
        if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
            return;
        }
        
        this.nodes.get(node1).push(node2);
        this.nodes.get(node2).push(node1);
    }
    
    insert(node, newNode) {
        if (!this.nodes.has(node)) {
            this.checkNode(node);
        }
        return this.nodes.get(node).push(newNode);
    }
    
    print() {
        for (let [node, edges] of this.nodes.entries()) {
            console.log(`${node} => ${edges.join(' | ')}`);
        }
    }
    
    find(node) {
        if (!this.nodes.has(node)) {
            this.checkNode(node);
        }
        console.log(`${node} => ${this.nodes.get(node).join(' | ')}`);
    }
    
    remove(node) {
        if (!this.nodes.has(node)) {
            this.checkNode(node);
        }
        
        return this.nodes.delete(node);
    }
    
    removeEdge(node, deleteEdge) {
        if (!this.nodes.has(node)) {
            this.checkNode(node);
        }
        
        const edges = this.nodes.get(node);
        const checkDeleteItem = edges.includes(deleteEdge);
        
        let getEdges = new Array();

        if (checkDeleteItem) {
            for (let edge of edges) {
                if (edge !== deleteEdge) {
                    getEdges.push(edge);
                }
            }
            return this.nodes.set(node, getEdges);
        } else {
            console.log(`Node ${deleteEdge} not found in ${node}`);
        }
    }
    
    removeAll() {
        if (!this.nodes) {
            console.log(`There's no nodes`);
            return;
        }
        
        return this.nodes.clear();
    }
    
    checkNode(node) {
        console.log(`Node ${node} not found!`);
        return;
    }
}

const graph = new Graph();
// Add Nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

// Set Nodes to Edge
graph.addEdge('C', 'D');
graph.addEdge('B', 'A');
graph.addEdge('A', 'B');
graph.addEdge('D', 'C');

// add Nodes in Edges
graph.insert('B', 'L');

// Find Node
graph.find('E');

// Delete Node
graph.remove('F');

// Delete Edge
graph.removeEdge('B', 'T');

// Delete All Node
graph.removeAll();

// print all
graph.print();
// console.log(graph.nodes);