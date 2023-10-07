
class List {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(val) {
        const newList = new List(val);
        
        if (!this.head) {
            this.head = newList;
            return;
        }
        
        let currentList = this.head;
        while (currentList.next) {
            currentList = currentList.next;
        }
        currentList.next = newList;
    }
}

var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

const linkedList = new LinkedList();
const lists = [1, 1, 2, 3, 3];

for (let i = 0; i < lists.length; i++) {
    linkedList.append(lists[i]);
}

const result = deleteDuplicates(linkedList.head);
console.log(result);
