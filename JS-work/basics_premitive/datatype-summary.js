// premitive types

//7 types: String, Number, Boolearn ,Null, Undefined, Symbol, BigInt  => uses stack memory
const number = 2;
const IsLoggedIn = true;
const OutSideTemp = null;
const string= "talha";
let isemail;
const id = Symbol('123');
const anotherid = Symbol('123');
//console.log(id==anotherid); //false
const bigNumber = 123456789n;

// JS is a dynamic type language(k humain batana ni prta k type kia ha, wo khud dkhta ha)

// Reference Type, Non-Premitive => uses heap memory

// Array, Objects, Functions

const heros = ["abubakar", "umar", "usman", "ali"]
let myObj = {
    name: "talha",
    age: 22
}
const myFunc = function(){
    console.log("Hello WOrld");
}


//************** Memory Types ******************** */

// Stack (Premitive) & Heap (Non-Premitive)
// in stack we got a copy but in heap we got a refrence
let a =3;
let b = a;
 a = 4;
console.log(a);
console.log(b);

let objone = {
    name:"talha",
    age:22
}
 let objtwo = objone;
 objtwo.age = 25;
console.log(objone.age);
console.log(objtwo.age);



