
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill([]).map(() => []);
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    create(key, value) {
        const hashKey = this.hash(key);
        this.table[hashKey].push({ key: key, value: value });
    }
    get(key) {
        const hashKey = this.hash(key);
        const getItem = this.table[hashKey];
        for (const item of getItem) {
            if (item.key === key) {
                console.log(`${item.key}: ${item.value}`);
                return;
            }
        }
        console.log(`${key} not found!`);
    }
    delete(key) {
        const hashKey = this.hash(key);
        const getItem = this.table[hashKey];
        for (let i = 0; i < getItem.length; i++) {
            if (getItem[i].key === key) {
                return getItem.splice(i, 1);
            }
        }
        console.log(`${key} not found!`);
    }
    replaceValue(key, newValue) {
        const hashKey = this.hash(key);
        const getItem = this.table[hashKey];
        for (const item of getItem) {
            if (item.key === key) {
                return item.value = newValue;
            }
        }
        console.log(`${key} not found!`);
    }
    clear() {
        const getItem = this.table;
        const modifyItem = getItem.map(() => []);
        this.table = modifyItem;
    }
}

const hashTable = new HashTable();
hashTable.create('name', 'Fyqq');
hashTable.create('age', 20);
hashTable.create('city', 'Selangor');
hashTable.create('country', 'Malaysia');
// hashTable.get('age');
// hashTable.delete('age');
// hashTable.replaceValue('age', 55);
// hashTable.clear();
console.log(hashTable.table);








