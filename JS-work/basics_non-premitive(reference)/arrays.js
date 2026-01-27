const fstarr = [0,1,2,3,4,5,6];
const sndarr = ["abubaakr", "umar", "usman", "ali"]
const trdarr = new Array(1,2,3,4,5);

//console.log(fstarr[2]);

fstarr.push(7)
// console.log(fstarr);
fstarr.pop();

// console.log(fstarr.includes(6));
// console.log(fstarr.indexOf(5));

// console.log(typeof fstarr);
// const b = fstarr.join();
// console.log(typeof b);

// console.log(fstarr);
const nstr1 = fstarr.slice(1,4);
// console.log(fstarr);
// console.log(nstr1);

const nstr2 = fstarr.splice(1,4);
// console.log(fstarr);
// console.log(nstr2);


const marvel = ["ironman", "spiderman", "loki"]
const dc = ["batman", "flash", "superman"]

//concate openrator
const all_heros = marvel.concat(dc);
// console.log(all_heros);

//spread operator
const all_new_heros = [...marvel, ...dc]
console.log(all_new_heros);

