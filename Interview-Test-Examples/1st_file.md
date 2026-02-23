# Notes for Javascript and react interview questions
## In this file we cover questions from 1-50

## 1st Question

```javascript
// Tell the output of below 3 lines
const data = 100;
console.log(data.toString());
console.log(100.toString());
// it will give syntax error beacuse of 3rd line
// because in JS .(dot) means 2 things either i am accessign a number in an object or giving a decimal point
// thats why JS is confused, BUT we can fix this by

console.log((100).toString()); // either wraping 100 in a bracket
// OR
console.log(100..toString()); // or we use double dot(..)

// after fix the result
// 100
// 100
```
## 2nd Question

```javascript
// Tell the output of below 3 lines
let num = 20;
console.log(num + "20");
console.log(++num);

// Result will be
2020
21
```

## 3rd Question

```javascript 
// How to flat an array  
[1, [2, [3, [[[4, [5]]]]]]]
// .flat()
// lakin is sa array flat ni ho ga is ka result yeh ay ga
// (3) [1, 2, Array(2)]
// Is ko hum is tra kr skty hain fix, K hum .flat() ki jagha .flat(infinity) use kry
[1, [2, [3, [[[4, [5]]]]]]].flat(Infinity)
// but agar hum ny isy recursion sa krna ha to ? Need to discuss
 function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, [[[4, [5]]]]]]]));
```

## 4th Question
```javascript 
// Tell the output of below 3 lines
console.log(parseInt("108"));
console.log(parseInt("108 * 200"));
console.log(parseInt("108Wonders"));
// Result
108
108
108
// ku k parseInt check check krta ha k jna taq usy valid number milta ha wo wha taq ly lata ha baki ignore kr deta ha
```

## 5th Question
```javascript 
// Is everything in JS is Object
let name = 'reactjs';
let score = 22;
// i have 2 objects but i can call methods on these variables, like toUpperCase(), toString()

Answer: no this is not true, theres a concept called boxing, 
// is main 1 certian time period k liy premitive values object main convert hoti hain, 
// or jsy hi execution complete hoti ha to object destroy ho jta ha
// What is premitive data type?

```

## 6th Question
```javascript 
// What is output
const name = "Lily";
age = 21;
console.log(delete name)
console.log(delete age)
// delete operator kisi object main sa koi key delete krny k liy use hota ha, 
// True: return krta ha jab opration scuuses ho. 
// False: return krta ha jab operation fail ho jata.

Result: 
In first log we are trying to delete a variable, so the operation will fail and returns FALSE 
In second log we are trying to delete a undeclaired variable, as its undeclair so it will be save in window scope, so it will be deleted from window and it return TRUE

```

## 7th Question
```javascript 
// What will log on console
for(var i = 0; i < 10; i++){
    setTimeout(() => {console.log(i)}, 0)
}

Result: It will print 10, ten times
// to fix this we can simply change var to let, then it print 0123456789
```

## 8th Question
```javascript 
// What will log on console
let user = {name: "Talha"};
const userList = [user];
user = null;
console.log(userList);
// Result: user ko null krny sa userList main jo us ka refersnce ha wo null ni ho ga, 
// or humain log main [{name: "Talha"}] hi show ho ga
```

## 9th Question
```javascript 
// What will log on console
function b (){
    var a = b = 3;
}
b()
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// Result: 
// a defined? false
// b defined? true
```

## 10th Question
```javascript 
// Can we use object as a key in JS? 
// What will be the Output
var a = {},
b = {key:'b'},
c = {key: 'c'};
a[b] = 123;
a[c] = 456;
console.log(a[b]);

// Result 456
// because jab hum kis object ko as a key use krty hain to JS aik special type ki 
// string create krta ha [object Object], is liay yeh result ay ga.
```

## 11th Question
```javascript 
// What will be the Output
fucntion showdata(){
  console.log("The name is: ", name)
  console.log("The age is: ", age)
  var name = "Talha"
  let age = 27
}
showdata()
//  we got an error, and nothing will be shown 
// as during execution the var will be executed on the top of function, like var name; 
// but in case of let variable we got an error "cannot access age before initialization"
Result: the name will be undefined and the the age will have reference error.
```

## 12th Question
```javascript 
// What will be the Output
for(var i = 0; i < 4; i++){
  setTimeout(() => console.log(i), 1000)
}
for(let i = 0; i < 4; i++){
  setTimeout(() => console.log(i), 1000)
}

// Result: for the 1st loop it will print 4 four times as var i will move to the top of fucntion.
// in case of 2nd loop it will print different values of i in each iteration
```

## 13th Question
```javascript 
// What will be the Output, check our this knowledge
const income = {
  skills: 108,
  monthly(){
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
}
console.log(income.monthly())
console.log(income.yearly())

// Result 1st console: 11664
// Result 2nd console: NaN
// because in arrow function the scope of (this) is of its parent which is window.
```

## 14th Question
```javascript 
// What will be the Output
console.log(+true)
console.log(!"JavaScript")

// Result 1st console: 1
// Result 2nd console: false
// jab bi hum + operator use krty hain kisi bi data type k sat to wo us data type ko number main convert kr deta ha.
```

## 15th Question
```javascript 
// Which is the wrong way to access an object
const code = {
  type:"web"
  };
const reactJS = {
  name: "JS"
  web: true
  }
// Options: 
// 1- reactJS[code.type]
// 2- reactJS[reactJS][type]
// 3- code.type.web 
// All are valid

// Result: 3 is not valid
```

## 16th Question
```javascript 
// What will be the Output
let a = 108;
let b = new Number(108)
let c = 108
console.log(a == b)
console.log(a === b)
console.log(b === c)

// Result: true
// Result: false
// Result: false
// because === also compair data types
```

## 17th Question
```javascript 
// What will be the Output
class Lizard{
  static colorChange(newColor){
    this.newColor = newColor;
    return this.newColor
  }
constructor({newColor = "orange"} = {}){
  this.newColor = newColor;
}
}
const tommy = new Lizard({newColor: "orange"})
console.log(tommy.colorChange("blue"))
// Result: it give Uncaught TypeError: tommy.colorChange is not a function
// As static methods are not avaiable on class instance
// if we want to run this code Lizard.colorChange and it will give the correct result
```

## 18th Question
```javascript 
// What will be the Output
let message;
mesage = {data: [20]}
console.log(mesage)
// Result: {data: Array(1)}
// it would not give error becasue JS will declair the mesage in window scope, so it will run
// if we want that JS to give error, we use "use strice"; on the top of program
```

## 19th Question
```javascript 
// What will be the Output
function showModel(){
  console.log(showModel.timeout)
}
showModel();
showModel.timeout = 200
showModel.timeout = 100
showModel()
// Result: undefined
// Result: 100
// it will give 100 because we are giving 100 and then calling the function
```

## 20th Question
```javascript 
// What will be the Output
function human(fname, lname){
  this.fname = fname;
  this.lname = lname;
}
const MrX = new human("Mr.", "X")
const RoxK = human("The", "Rock")
console.log(MrX)
console.log(RoxK)
// Result: human {fname: 'Mr.', lname: 'X'}
// Result: undefined
// because jab bi hum new keyword k sat fucntion call krty hain to wo object return krta ha, or us object main hum keys this keyword sa add kr skty hain...
// 2nd main undefined is liy mily ga ku k wo 1 normal call or fucntion kuch return ni kr rha is liy...

// done till 22/405
```

## 21st Question
```javascript 
// What are the 3 phases of event propagation
// Answer: Capturing, Target, bubbling
```

## 22nd Question
```javascript 
// What will be the Output
fucntion sum(a, b){
  return a+ b;
}
console.log(sum(10, "10"))
// Result: 1010
// because in JS when we use + with string it concatinates both
```

## 23rd Question
```javascript 
// What will be the Output
// discuss
function getsumry(one, two, three){
  console.log(one)
  console.log(two)
  console.log(three)
}
const fname = "Talha"
const age = 28;
getsumry`${fname} age is ${age}`
// Result: (3) ['', ' age is ', '', raw: Array(3)]
//  Talha
//  28
// because jab bi hum function call krty hain ksi template litral 
// k sat to humain as a array return hoti ha, with empty variables
```

## 24th Question
```javascript 
// What will be the Output
function checkAge(data){
  if (data === {age: 18}){
    console.log("You are adult")
  }else if (data == {age: 18}){
    console.log("You are still an adult")
  }else{
    console.log("hummm.... no age")
  }
}
checkAge({age: 18})
// Result: hummm.... no age
// because as objects are reference based so it looks same but arenot actually
```

## 25th Question
```javascript 
// What will be the Output
function getType(...args){
  console.log(typeof args) //object
  console.log(Array.isArray(args)) // true
}
getType(108)
// In jS array has not type sab object hota ha... to is liy jab log kry gy to humain Object show ho ga.
// if we want to check if its array we can use buitl in method Array.isArray(args) 
```

## 26th Question
```javascript 
// What will be the Output
function getAge(){
  "use strict"
  salary = 8121
  console.log(salary)
}
getAge();
// ReferenceError: salary is not defined
// becasue we use the strict mode
```

## 27th Question
```javascript 
// What will be the Output
var num = 8;
var num = 10;
console.log(num)
// result: 10
// because we can declair the same variable name using var.
```

## 28th Question
```javascript 
// What will be the Output
const obj = {
  1: "a",
  2: "b",
  3: "c",
}
const set = new Set([1,2,3,4,5])
console.log(object.hasOwnProperty("1")) // true
console.log(object.hasOwnProperty(1)) // true
console.log(set.has("1")) // false, because array dont have any string value
console.log(set.has(1)) // true
```

## 29th Question
```javascript 
// What will be the Output
const obj = {
  a: "1",
  b: "2",
  a: "3",
}
console.log(obj)
// result: {a: '3', b: '2'}
// jo key bad main define ki ha wo obj main dikhny ko mily gy, 
// soso if we use duplicate value the last one get update
```

## 30th Question
```javascript 
// What will be the Output
for (let i = 1; i < 5; i++){
  if(i === 3) continue;
  console.log(i);
}
// result: 1
// 2
// 4
// it will skip 3 because of continue, and print all the remaining values
```

## 31st Question
```javascript 
// What will be the Output
String.prototype.youAreAmazing = () => {
  return "You are amazing my friend."
}
const who = "viewer"
console.log(who.youAreAmazing())
// Result: You are amazing my friend.
// because of prototype as it is use to share the functionality between objects and function
```

## 32nd Question
```javascript 
// What will be the Output
const a = {}
const b = {key: "b"}
const c = {key: "c"}
a[b] = 222;
a[c] = 999;
console.log(a[b]) // 999
// Result: object is using as a  key within an object, so it will return [object Object] as a string
```

## 33th Question
```javascript 
// What will be the Output
const lang = {name: "Talha"}
function getLib(ver){
  return `${this.name} version ${ver}`
}
console.log(getLib.call(lang, 18)); // Talha version 18
console.log(getLib.bind(lang, 18)); // ƒ getLib(ver){
//   return `${this.name} version ${ver}`
// }
```

## 34th Question
```javascript 
// What will be the Output
function sayHi(){
  return (() => 0)();
}
console.log(typeof sayHi()) // number
// because its returing a number
```

## 35th Question
```javascript 
// What will be the Output
console.log(typeof typeof 1) // string
// as everything is executed from right to left, so 1stly it return (typeof "number") then its a string
```

## 36th Question
```javascript 
// What will be the Output
const numbers = [1,2,3]
numbers[10] = 11;
console.log(numbers) // [1, 2, 3, empty × 7, 11]
// it create empty slots and insert the val in the given index
```

## 37th Question
```javascript 
// What will be the Output
// discuss =>  what is this iffi ??
(() => {
  let x, y;
  try{
    throw new Error();
  }catch (x){
    (x = 1), (y = 2) // in this we are settign the values for the local scope
    console.log(x) // 1
  }
    console.log(x); // undefined
    console.log(y); // 2
})();
```

## 38th Question
```javascript 
// What will be the Output
const data = [..."Apple"] // (...) by using dots we are destructuring the array
console.log(data) // (5) ['A', 'p', 'p', 'l', 'e']

// 40/405
```