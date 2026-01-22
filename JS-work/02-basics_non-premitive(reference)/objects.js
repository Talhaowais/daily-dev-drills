const mysym = Symbol("key1")

const obj1 ={
        name: "Talha",
        "Full Name": "Muhammad Talha",
        age:26,
        [mysym]:"key1",
        email:"talhaowasi345@gmail.com",
        location:["SGD", "LHR", "ISB"],
        IsLoggedIn: false,
        country: "Pakistan"
}

// console.log(obj1.email);
// console.log(obj1["Full Name"]);
// console.log(obj1[mysym]);

const oba1 = {1:"a", 2:"b"};
const oba2 = {3:"a", 4:"b"};

const oba4 = Object.assign({}, oba1, oba2)
// console.log(oba4);


const oba3 = {...oba1, ...oba2};
// console.log(oba3);



// destructing

const course = {
        myname: "talha",
        thisismyage: 28,
        thisismylifespan: "dont know"
}
// course.thisismylifespan
const {thisismylifespan: life} = course;
console.log(life);
console.log(course.myname);


