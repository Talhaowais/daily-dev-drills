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
// What will be the Output


```