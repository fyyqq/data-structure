

function conquer(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    
    if (numbers.length === 1) {
        return 1;
    }
    
    const mid = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, mid);
    const right = numbers.slice(mid);

    const leftCount = conquer(left);
    const rightCount = conquer(right);

    return leftCount + rightCount;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = conquer(arr);
// console.log(result);