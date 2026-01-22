//assigning an object to function
const newobj = {
    name: "Talha",
    age:30
}

function callingobject(object){
    console.log(`The name of dev is ${object.name} and his age is ${object.age}`);
}
callingobject(newobj);


//assigning an array to a function
const newarray = [100, 200, 300, 400]
 function callingarray(anarray){
    return anarray[2];
 }
 console.log(callingarray(newarray))
