
function quickSort(numbers) {
    if (numbers.length < 1) {
        return numbers;
    }
    
    const firstNumber = numbers[0]; // 5 
    let firstArray = [];
    let secondArray = [];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= firstNumber) {
            firstArray = [...firstArray, numbers[i]]; // [2, 3, 1, 4]
        } else {
            secondArray = [...secondArray, numbers[i]]; // [ 8, 9, 7, 6, 10 ]
        }
    }

    return [...quickSort(firstArray), firstNumber, ...quickSort(secondArray)];
}

const array = [5, 2, 3, 8, 1, 4, 9, 7, 6, 10]
const print = quickSort(array).join(', ');
console.log(print);