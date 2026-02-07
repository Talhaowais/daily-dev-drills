
// creating a promise and assigning it to a variable    
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("1st Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    // console.log("1st promise is completed");
})


// 2nd method
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("2nd Async task is complete");
        resolve()
    }, 1000);
}).then(function(){
    // console.log("2nd promise is completed");
})


// Creating 3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("3rd Async task is complete");
        // In resolve we can pass either object, array or function as we like 
        resolve({username: "Talha", email: "talhaowais345@gmail.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
    console.log("3rd promise is completed");

})