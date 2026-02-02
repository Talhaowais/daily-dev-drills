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

// Get only the names from the users list.
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 19 },
  { name: "Ahmed", age: 25 }
];
console.log(users.map((n) => n.name))


// Keep users who are 21 or older.
const people = [
  { name: "Ayan", age: 16 },
  { name: "Hassan", age: 21 },
  { name: "Usman", age: 28 }
];
console.log(people.filter((a) => a.age >= 21 ))

// From this list:
//  Keep products with price greater than 1000
//  Return only their names
const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "USB Cable", price: 500 }
];
console.log(products.filter((p) => p.price > 1000).map((d) => d.name))


// Step 4:

// Calculate the total price of all items.
const cart = [
  { item: "Book", price: 300 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 1200 }
];
let newVal = cart.reduce((acc,c) => acc + c.price, 0)
console.log(newVal);

// Find the total marks scored by all students.
const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 90 },
  { name: "Ahmed", marks: 70 }
];
let newMarks = students.reduce((acc,m) => acc + m.marks, 0)
console.log(newMarks);

// From this list:
//  Keep users who are active
//  Calculate their total balance
const users2 = [
  { name: "Ali", active: true, balance: 500 },
  { name: "Sara", active: false, balance: 700 },
  { name: "Ahmed", active: true, balance: 300 }
];
let finalUser = users2.filter((u2) => u2.active == true).reduce((acc,rd) => acc + rd.balance, 0)
console.log(finalUser);


// Step 5:

// Tasks:
//  Keep items where price × qty > 2000
//  Convert them into this format:
const cart5 = [
  { item: "Laptop", price: 80000, qty: 1 },
  { item: "Mouse", price: 800, qty: 2 },
  { item: "Keyboard", price: 1500, qty: 1 },
  { item: "USB Cable", price: 500, qty: 3 }
];
let finalCart5 = cart5.filter((c5) => c5.price * c5.qty > 2000).map((c5) => ({
  item: c5.item, 
  total: c5.price
}))
console.log(finalCart5[0]);

// Tasks:
//  Remove students with marks below 60
//  Add 10 bonus marks to remaining students
//  Calculate the average marks
const students5 = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 45 },
  { name: "Ahmed", marks: 72 },
  { name: "Ayesha", marks: 90 },
  { name: "Usman", marks: 60 }
];
let finalstnd = students5.filter((s5) => s5.marks > 60).map((s5) => ({
  name: s5.name,
  marks: s5.marks + 10
}))
console.log(finalstnd);
console.log(finalstnd.length);
let totalmarks = finalstnd.reduce((acc, s5) => acc + s5.marks, 0)
let average = totalmarks/finalstnd.length
console.log(average);

// Tasks:
//  Keep only completed orders
//  Double the amount if amount < 500
//  Find the highest final amount
const orders5 = [
  { id: 1, status: "completed", amount: 500 },
  { id: 2, status: "pending", amount: 300 },
  { id: 3, status: "completed", amount: 700 },
  { id: 4, status: "cancelled", amount: 400 },
  { id: 5, status: "completed", amount: 200 }
];
let greatest = orders5.filter((o5) => o5.status == "completed")
.map((o5) => o5.amount < 500 ? o5.amount * 2 : o5.amount)
.reduce((acc, o5) => o5 > acc ? o5 : acc, 0)
console.log(greatest);




