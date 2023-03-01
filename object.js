// create Object using object litarals 

const player = {}
player.name = "samall Nirob";
player.specialty = 'bolar';
player.bat = function () {
    // console.log('swing Your bat');

}
// console.log(player);
player.bat()

const student = {
    name: "panday", Job: 'KHai Andy',

    ball: function () {

        console.log('throw the ball')
    },

    salary: 10000
}

//  2 object constructor, 
const person = new Object()
// console.log(person); 

// 3. Obect create  Method  
// const item = Object.create(null) 
const atel = Object.create(student)
// console.log(atel.name); 

//  4 . class 
class Person {
    name = "abul";
    address = " sodor Shat";
    constructor(age) {
        this.age = age

    }


}


const person1 = new Person(554)
console.log(person1);

//  function 

function Car(model, price) {
    this.model = model;

    this.price = price

}
const total = new Car(45, 434)
console.log(total);
