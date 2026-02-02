// step 6

// Question 1 — Average (EMPTY ARRAY CASE)
/* Task:
Calculate the average score.
Rules:
❌ Must NOT return NaN
❌ Must NOT crash
✅ If array is empty → return 0 */
const scores6 = [];
// let avg = 0;
// if(scores6.length > 0){
//     let total = scores6.reduce((acc,num) => acc + num, 0)
//     avg = total/scores6.length
// }
// console.log(avg);
// we can also wriet the above code as follow
let avg = scores6.length == 0 ? 0 : scores6.reduce((acc,num) => acc + num, 0)/scores6.length;
console.log(avg);



// Question 2 — Total balance (MISSING PROPERTY)
/*  Task:
Calculate total balance.
Rules:
If balance is missing → treat as 0
Use reduce only*/
const users6 = [
  { name: "Ali", balance: 500 },
  { name: "Sara" },
  { name: "Ahmed", balance: 300 }
];
let totalBalance = users6.reduce((acc, bal) => acc + (bal.balance || 0), 0)
console.log(totalBalance);


// Question 3 — Find highest (ALL NEGATIVE)
/* Task:
Find the highest temperature.
Rules:
❌ Do NOT use Math.max
❌ Do NOT use 0 as initial value
✅ Must work for all-negative arrays */
const temps6 = [-10, -20, -5, -30];
let finaltemp = temps6.reduce((acc,temp) => {
  if(temp >= acc){
    acc = temp
  }
  return acc;
},temps6[0])
console.log(finaltemp);

// Step 7:
/* Tasks:
1️⃣ Keep only active users
2️⃣ Convert into this shape:
{ name: "Ali", score: logins * 10 }
3️⃣ Find the highest score */
const users7 = [
  { id: 1, name: "Ali", active: true, role: "admin", logins: 10 },
  { id: 2, name: "Sara", active: false, role: "user", logins: 3 },
  { id: 3, name: "Ahmed", active: true, role: "user", logins: 7 },
  { id: 4, name: "Ayesha", active: true, role: "admin", logins: 15 }
];






