// for of loop

const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(arr);
}

const word = "Hi! Talha"
for (const wrd of word) {
    // console.log(wrd);  
}

//maps
 const map = new Map()
 map.set('PKR' , "Pakistan")
 map.set('IN' , "India")
 map.set('CH' , "Chine")

//  console.log(map);
// for of loop is used in 
 for (const [key, value] of map) {
    //console.log(key, " : ", value );
    
 }
 //for in loop is used with objects, it gives indexs and for of loop is used with array and it give all data.
 

 // for each loop
 const coding = ["tala", "bilal", "ali", "hamza"]
//  coding.forEach( function(item) {
//     console.log(item);
//  })

coding.forEach( (item)=> {
    //console.log(item);
 })

const newarr = [
    {
        language:"Javascript",
        filename:"js"
    },{
        language:"HTML",
        filename:"html"
    },{
        language:"Read Me",
        filename:"txt"
    }
]
newarr.forEach((item)=>{
    console.log(item.language);
})