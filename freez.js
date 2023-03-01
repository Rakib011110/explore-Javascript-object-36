const bottle = { color: "yellow", price: 50, isCleanded: true, capacity: 1 }

const keys = Object.keys(bottle)
// console.log(keys); 
const values = Object.values(bottle)
// console.log(values); 
const pair = Object.entries(bottle)
// console.log(pair);  
// const twoDinmension = [
//     ['color', 'yellow'],
//     ['price', 50],
//     ['isCleanded', true],
//     ['capacity', 1]
// ] 

// Object.seal(bottle) 
Object.freeze(bottle)
delete bottle.isCleanded
bottle.price = 1000
bottle.hight = 12
console.log(bottle);

