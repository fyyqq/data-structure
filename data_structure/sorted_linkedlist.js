
class Node {
    constructor(node) {
        this.node = node;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    mergeLists(list) {
        const newNode = new Node(list);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    
    convertList() {
        let list = this.head;
        let lists = [];
        
        while (list) {
            lists.push(list.node);
            list = list.next;
        }
        let middle = Math.floor(lists.length / 2);
        let left = lists.slice(0, middle);
        let right = lists.slice(middle);
        
        return [left, right];
    }
    
}

const linkedList = new LinkedList();
linkedList.mergeLists(1);
linkedList.mergeLists(2);
linkedList.mergeLists(4);
linkedList.mergeLists(1);
linkedList.mergeLists(3);
linkedList.mergeLists(4);

const mergeTwoLists = function(list1, list2) {
    let x = 0;
    let y = 0;
    let sortedArr = [];
    
    while (x < list1.length && y < list2.length) {
        if (list1[x] < list2[y]) {
            sortedArr.push(list1[x]);
            x++;
        } else {
            sortedArr.push(list2[y]);
            y++;
        }
    }
    
    while (x < list1.length) {
        sortedArr.push(list1[x]);
        x++;
    }
    
    return sortedArr;
}

const [left, right] = linkedList.convertList();
const result = mergeTwoLists(left, right);
console.log(result)