//Step 1:

// Convert all numbers to their square.
const numbers = [1, 2, 3, 4];
console.log(numbers.map((n) => n * n));

// Keep only numbers greater than 5.
const values = [3, 7, 1, 9, 4, 6];
console.log(values.filter((n) => n > 5))

// Find the total sum.
const nums = [2, 4, 6, 8];
console.log(nums.reduce((acc, m) => acc + m, 0))

// Step 2:

// Convert each number to a string with "Value: " in front.
const nums2 = [5, 10, 15];
console.log(nums2.map((i) => `Value: ` + i))

// Keep only numbers that are odd.
const data = [2, 5, 8, 11, 14, 17];
function oddNumbers(data){
    if(data % 2 !== 0){
        return data;
    }
}
let finalData = data.filter((e) => oddNumbers(e));
console.log(finalData);

// Find the largest number in the array.
const scores = [45, 72, 88, 60, 91];
let largeNumber = scores.reduce((acc, j) => {
    if (j > acc){
            acc = j;
        }
        return acc;
}, scores[0])
console.log(`The largest numer in an array is ${largeNumber}`);


// Step 3:

//


