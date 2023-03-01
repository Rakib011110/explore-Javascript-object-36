const numbers = [12, 54, 65, 3, 54]
for (const number of numbers) {
    // console.log(number);
}

const bottle = { color: "yellow", price: 50, isCleanded: true, capacity: 1 }

//  1. for of can not use with objects
// for (const key of bottle) {
//     // console.log(key);
// }



/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/

const keys = Object.keys(bottle)
// console.log(keys);
for (const key of keys) {
    console.log(key, bottle[key]);
}

// advanced 
const pair = Object.entries(bottle);
console.log(pair)
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}