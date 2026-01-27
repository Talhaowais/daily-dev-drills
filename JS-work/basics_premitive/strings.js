let a = "talha"
let number = 20;
// console.log(a + number + " ok");
// console.log(`Helo my name is ${a} and my number is ${number}`);

const getname = new String('Talha')
console.log(getname[0]);
console.log(getname.__proto__);
console.log(getname.length);
console.log(getname.toUpperCase);
console.log(getname.charAt(3));
console.log(getname.indexOf('a'));

const newname = getname.substring(0,3);
console.log(newname);

const onenewname = getname.slice(-3,3);
console.log(onenewname);

const twonewname = "    Talha  .     "
console.log(twonewname);
console.log(twonewname.trim());


const threenewname = "Talha is doing development hee";
console.log(threenewname.replace(' hee', '.'));





