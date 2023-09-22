
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

const numbers = [2, 7, 3, 5, 1, 15, 8, 4, 10, 14];
const searchNumber = 2;

const linear = linearSearch(numbers, searchNumber);
console.log(linear);