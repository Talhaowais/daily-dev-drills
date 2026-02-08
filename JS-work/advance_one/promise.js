
// // creating a promise and assigning it to a variable    
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("1st Async task is complete");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     // console.log("1st promise is completed");
// })


// // 2nd method
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("2nd Async task is complete");
//         resolve()
//     }, 1000);
// }).then(function(){
//     // console.log("2nd promise is completed");
// })


// // Creating 3rd promise
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("3rd Async task is complete");
//         // In resolve we can pass either object, array or function as we like 
//         resolve({username: "Talha", email: "talhaowais345@gmail.com"})
//     }, 1000);
// })
// promiseThree.then(function(user){
//     // console.log(user);
//     // console.log("3rd promise is completed");

// })

// // The use of reject
// const fourthPromise = new Promise((function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({name1: "Talha-2", email: "2nd-talhaowais345@gmail.com"})
//         }else{
//             reject("Error:You're missing something")
//         }
//     }, 1000)
// }))
// fourthPromise.then((user) => {
//     // console.log(user);
//     return user.name1
// }).then((name1) => {
//     // console.log(name1);
// }).catch(function(error){
//     // console.log(error);
// }).finally(() => console.log("The promise is either resolved or reject"))

// // we can either do try and catch or use .then or .catch
// const fifthPromise = new Promise((function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({name3: "Talha-3", email: "3rd-talhaowais345@gmail.com"})
//         }else{
//             reject("Error:You're missing something")
//         }
//     }, 1000)
// }))

// //  1st method 
// async function newFifthPromise(){
//     try {
//         const response = await fifthPromise
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// newFifthPromise()
fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
