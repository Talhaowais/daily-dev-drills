function one() {
    // console.log("1st method to write a function.");
}
one();

const two = function () {
        // console.log("2nd method to write a function.");
}
two();

const three =  () => {
        // console.log("3rd method to write a function.");
}
three();

// arrow fucntions more examples
const addTwo = (num1, num2) => {
    return num1 + num2;
}
//console.log(addTwo(2,3))

//we can also write the above fucntion as: This is also calles as implesit return
const addthree = (num1, num2, num3) =>  (num1 + num2 + num3);
//console.log(addthree(2,3,5))

//we can return the objects like
const four = () =>  ({name: "Talha"});


//IIFI: Imidiately Invoked Function Expression
(function run() {
    console.log("Run Fast/Imidiately");
})();

//iifi fucntions/ unnamed fucntions
( (name) => {
    console.log(`Run Fast/Imidiately ${name}`);
})("Talha");
