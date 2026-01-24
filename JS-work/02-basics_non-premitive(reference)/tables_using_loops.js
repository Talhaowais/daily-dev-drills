// tables printing
for (let i = 0; i <=10; i++) {
    // console.log(`The table of ${i} is as follow:`);
    for (let j = 0; j <=10; j++) {
        // console.log(i + " * " + j + " = " + i*j);   
    }
}

// printing all vaues from an array 
const myarr = ["Qasim", "Adeel", "Zain", "Tahmoor", "Honey" ]
for(let i=0; i<myarr.length; i++)
{
    names = myarr[i]
    // console.log(names); 
}

// break and continue
//break
for (let index = 1; index <=20; index++) {
    if(index == 5){
       // console.log(`Required number ${index} is detected.`);
        break;
    }
    //console.log(`Value of index is ${index}`); 
}

//continue
for (let index = 1; index <=20; index++) {
    if(index == 5){
        // console.log(`Required number ${index} is detected.`);
        continue;
    }
    // console.log(`Value of index is ${index}`); 
}

// while and do while loop
let i = 0;
while (i<=10) {
    console.log(`The value is ${i}`);
    i = i+2;
}

let j = 0
do {
    console.log(`The scor is ${j}`);
    j++
} while (j<=10);