
function linearSearch(arrays, target) {
    let steps = 0;
    let arrayLength = arrays.length; // 10
    
    for (let i = 0; i < arrayLength; i++) {
        steps++;
        
        if (arrays[i] === target) {
            return { id: steps, number: arrays[i], message: `We found ${arrays[i]}` };
        }
    }
    return { message: `We don't found ${target}` };
}

const linearNumbers = [2, 7, 3, 5, 1, 15, 8, 4, 10, 14];
const linearSearchNumber = 2;

const ls = linearSearch(linearNumbers, linearSearchNumber);
console.log(ls);


function binarySearch(arrays, target) {
    let arrayLength = arrays.length; // 10
    
    for (let i = 0; i < arrayLength; i++) {
        if (arrays[i] === target) {
            return { index: i, number: arrays[i], message: `We found ${arrays[i]}` };
        }
    }
    return { message: `We don't found ${target}` };
}

const binaryNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const binarySearchNumber = 8;

const bl = binarySearch(binaryNumbers, binarySearchNumber);
console.log(bl);