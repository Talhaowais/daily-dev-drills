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






