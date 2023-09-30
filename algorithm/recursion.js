
function binarySearch(array, target, start = 0, end = array.length - 1) { // 7

    if (start > end) {
        return -1;
    }
    
    // (4 + 7) / 2 = 5
    // (6 + 7) / 2 = 6
    // (7 + 7) / 2 = 7
    // 5 / 6 / 7
    
    // (0 + 2) / 2 = 1
    // 1
    
    // (4 + 7) / 2 = 5
    // (4 + 4) / 2 = 4
    // 5 / 4

    // (0 + 2) / 2 = 1
    // (2 + 2) / 2 = 2
    // 1 / 2
    
    // (0 + 2) / 2 = 1
    // 1
    
    // (0 + 2) / 2 = 1
    // (0 + 0) / 2 = 
    const middle = Math.floor((start + end) / 2); // 3 / 1
    console.log(`start = ${start} | end = ${end} | middle = ${middle}`);
    
    if (array[middle] === target) { // ✔ ✔
        return 1;
    }
    
    if (array[middle] > target) {
        // Move to left
        return binarySearch(array, target, start, middle - 1)
    } else {
        // Move to right
        return binarySearch(array, target, middle + 1, end)
    }
}

//                    0  1  2  3   4   5   6   7
const sortedNumber = [2, 4, 6, 8, 10, 12, 14, 16];
const result = binarySearch(randomNumber, targetNumber);

if (result !== -1) {
    console.log(`We found ${targetNumber} on array`);
} else {
    console.log(`We don't found ${targetNumber} on array`);
}