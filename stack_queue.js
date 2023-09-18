
class Stack {
    constructor() {
        this.item = [];
    }
    isEmpty(item) {
        return item.length === 0;
    }
    push(data) {
        this.item.push(data);
    }
    pop() {
        if (this.isEmpty(this.item)) {
            console.log('Empty stack!');
            return;
        }
        return this.item.pop();
    }
    shift() {
        const items = this.size();
        let getItems = [];
        for (let i = 1; i < items; i++) {
            getItems.push(this.item[i]);
        }
        this.item = getItems;
    }
    unshift(data) {
        return this.item = [data, ...this.item];
    }
    firstItem() {
        return this.item = this.item[0];
    }
    peek() {
        if (this.isEmpty(this.item)) {
            console.log('Empty stack!');
            return;
        }
        console.log(this.item[this.item.length - 1]);
    }
    reverse() {
        const items = this.size();
        let getItems = [];
        for (let i = items - 1; i >= 0; i--) {
            getItems.push(this.item[i]);
        }
        this.item = getItems;
    }
    size() {
        return this.item.length;
    }
    display() {
        console.log(this.item);
    }
    find(data) {
        let items = this.size();
        for (let i = 0; i < items; i++) {
            if (this.item[i] == data) {
                console.log(this.item[i]);
                return;
            }
        }
        console.log(`Item ${data} not found`);
    }
    greater(data) {
        let items = this.size();
        let getItem = [];
        for (let i = 0; i < items; i++) {
            if (this.item[i] > data) {
                getItem.push(this.item[i]);
            }
        }
        if (getItem.length > 0) {
            this.item = getItem;
        } else {
            console.log(`No item is greater than ${data}`);
        }
    }
    lower(data) {
        let items = this.size();
        let getItem = [];
        for (let i = 0; i < items; i++) {
            if (this.item[i] < data) {
                getItem.push(this.item[i]);
            }
        }
        if (getItem.length > 0) {
            this.item = getItem;
        } else {
            console.log(`No item is lower than ${data}`);
        }
    }
    replace(data, change) {
        let items = this.size();
        for (let i = 0; i < items; i++) {
            if (this.item[i] == data) {
                return this.item[i] = change;
            }
        }
    }
    join() {
        return this.item = this.item.join('');
    }
    clear() {
        return this.item = new Array();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// stack.pop();
// stack.shift();
// stack.unshift(7);
// stack.firstItem();
// stack.peek();
// stack.reverse();
// stack.size();
// stack.display();
// stack.find(5);
// stack.greater(6);
// stack.lower(3);
// stack.replace(1, 11);
// stack.join();
// stack.clear();
console.log(stack);