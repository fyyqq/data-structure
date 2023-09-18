class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        
        let head = this.head;
        while (head.next) {
            head = head.next;
        }
        head.next = newNode;
    }
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    replace(data, update) {
        if (!this.head) {
            return;
        }
        
        let current = this.head;
        while (current) {
            if (current.data === data) {
                current.data = update;
                return;
            }
            current = current.next;
        }
    }
    delete(data) {
        if (!this.head) {
            console.log('No data yet.');
            return;
        }
        if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        console.log(`Data ${data} not found.`);
    }
    deleteEnd() {
        if (!this.head) {
            console.log('No data yet.');
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    deleteStart() {
        if (!this.head) {
            console.log('No data yet.');
            return;
        }
        this.head = this.head.next;
    }
    get(data) {
        if (!this.head) {
            console.log('No data yet.');
            return;
        }
        
        if (this.head.data == data) {
            console.log(data);
            return;
        }
        
        let current = this.head;
        let checkData = false;
        while (current.next) {
            if (current.next.data == data) {
                console.log(current.next.data);
                checkData = true;
                return;
            }
            current = current.next;
        }
        if (!checkData) {
            console.log(`Data ${data} isn't available`);
        }
    }
    getAll() {
        if (!this.head) {
            console.log('No data yet.');
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let linkList = new LinkedList();
linkList.append(3);
linkList.append(4);
linkList.append(5);
linkList.prepend(2);
linkList.prepend(1);
// linkList.delete(3);
// linkList.replace(1, 5);
// linkList.deleteEnd();
// linkList.deleteStart();
// linkList.get(4);
// linkList.getAll();
// console.log(linkList);


