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
// console.log(avg);



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
// console.log(totalBalance);


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
// console.log(finaltemp);

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
let activeUsers = users7.filter((us) => us.active = 'true')
// console.log(activeUsers);
let shape = activeUsers.map((multi) => ({
  name: multi.name,
  score: multi.logins * 10
}))
// console.log(shape);
let highscore = shape.reduce((acc, h) => {
  if(h.score > acc){
    acc = h.score
  }return acc
},0)
// console.log(highscore);


// Question 2 — Sales analytics
/* Tasks:
1️⃣ Calculate revenue per product (price × sold)
2️⃣ Keep products with revenue ≥ 50,000
3️⃣ Find total revenue of those products */
const sales7 = [
  { product: "Laptop", price: 80000, sold: 3 },
  { product: "Mouse", price: 800, sold: 20 },
  { product: "Keyboard", price: 1500, sold: 5 },
  { product: "USB", price: 500, sold: 50 }
];
let revs = sales7.map((rev) => ({
  product: rev.product,
  revenue: rev.price * rev.sold
}))
// console.log(revs);

let fltGrt = revs.filter((grt) => grt.revenue >= 50000)
// console.log(fltGrt);

let tsum = fltGrt.reduce((acc,sum) => acc + sum.revenue, 0)
// console.log(tsum);


// Question 3 — User roles report (harder 🧠)
/* Task:
Produce this result:
{
  admin: 2,
  user: 3
}
Rules:
❌ No loops
❌ No if / else outside reduce
✅ Use reduce */
const usersRoles7 = [
  { name: "Ali", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "Ahmed", role: "user" },
  { name: "Ayesha", role: "admin" },
  { name: "Usman", role: "user" }
];
let rolesCount = usersRoles7.reduce((acc, r) => {
  if(r.role === "admin"){
    acc.admin++
  }else if(r.role === "user"){
    acc.user++
  }
  return acc
}, { admin: 0, user: 0 })
// console.log(rolesCount);


// Step 8
/* Question 1 — Sum only valid numbers
const scores8 = [10, null, 20, undefined, 30, "40"];
🎯 Goal:
60
👉 Count only numbers
👉 "40" should be ignored */
const scores8 = [10, null, 20, undefined, 30, "40"];
let asum = scores8.reduce((acc,red) => typeof red === "number" ? acc + red : acc, 0)
// console.log(asum);


// Question 2 — Default values in objects
/* Goal:
800
👉 If balance missing → treat as 0
👉 Use only reduce */
const users8 = [
  { name: "Ali", balance: 500 },
  { name: "Sara" },
  { name: "Ahmed", balance: 300 }
];
let tuser = users8.reduce((acc,val) => acc + (val.balance || 0), 0)
// console.log(tuser);

//Question 3 — Find minimum (negative numbers)
/*const temps8 = [-10, -20, -5, -30];
🎯 Goal:
-30
👉 No Math.min
👉 Proper initial value matters */
const temps8 = [-10, -20, -5, -30];
let ft = temps8.reduce((acc, t) => {
  if(t < acc){
    acc = t
  }return acc
},temps8[0])
// console.log(ft);


// Step 9
// Question 1 — Group users by role
/* Goal output:
{
  admin: ["Ali", "Ahmed"],
  user: ["Sara", "Ayesha"],
  manager: ["Usman"]
}
👉 Rules:
use only reduce
no loops
accumulator starts as {}*/
const users9 = [
  { name: "Ali", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "Ahmed", role: "admin" },
  { name: "Ayesha", role: "user" },
  { name: "Usman", role: "manager" }
];
const groupedUsers = users9.reduce((acc, user) => {
  // if role does not exist, create empty array
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  // push name into the correct role array
  acc[user.role].push(user.name);
  return acc;
}, {});
// console.log(groupedUsers);

// Question 2 — API-style data cleanup
/* Tasks:
1️⃣ keep only active products
2️⃣ convert to:
{ name: "Laptop", price: 80000 }
3️⃣ find total price of active products*/
const apiProducts9 = [
  { id: 1, title: "Laptop", price: 80000, active: true },
  { id: 2, title: "Mouse", price: 800, active: false },
  { id: 3, title: "Keyboard", price: 1500, active: true }
];
// // console.log(apiProducts9.filter((act) => act.active == true)
// .map((sh) => ({
//   name: sh.title,
//   price: sh.price
// })).reduce((acc,sm) => acc + sm.price, 0))


// Question 3 — Most frequent value (classic interview)
/* Goal:
"error"
👉 Only reduce
👉 Hint: first count, then decide max */
const logs9 = [
  "error",
  "info",
  "error",
  "warning",
  "info",
  "error"
];
let again = logs9.reduce((acc,rep) => {
  acc[rep] = (acc[rep] || 0) + 1
  return acc
},{})
// console.log(again);

let big = Object.keys(again).reduce((acc,key) => {
  return again[key] > again[acc] ? key : acc;
})
// console.log(big);


// 🧠🔥 STEP 10 — MASTER LEVEL (REAL APP LOGIC)
// This step mirrors production code.
// One problem = map + filter + reduce thinking, even if you don’t literally call all three.
// Take your time. No rushing.
/* 🎯 Your Tasks
1️⃣ Keep only completed orders
2️⃣ Group total spending per user
3️⃣ Find the user with the highest total spend
✅ Expected Output
{
  user: "Ali",
  total: 1200
} */ 
const orders10 = [
  { id: 1, user: "Ali", status: "completed", amount: 500 },
  { id: 2, user: "Sara", status: "pending", amount: 300 },
  { id: 3, user: "Ali", status: "completed", amount: 700 },
  { id: 4, user: "Ahmed", status: "completed", amount: 400 },
  { id: 5, user: "Ali", status: "cancelled", amount: 200 },
  { id: 6, user: "Ahmed", status: "completed", amount: 600 }
];





