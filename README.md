# explore-Javascript-object-36

- [js type](#js-type)

### demo

<details>
<summary>
  <h3> Way to create js Obejct ? (Click Me)</h3>
</summary>
<br >

- 1: Object literal notation: This is the most common way to create a JavaScript object. You define the object using curly braces {} and add properties and methods inside it.

```js
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  sayHello: function () {
    console.log("Hello!");
  },
};
```

- 2 : Constructor function: You can also create an object using a constructor function. You define a function and use the new keyword to create an instance of the object.

```js
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.sayHello = function () {
    console.log("Hello!");
  };
}

const person = new Person("John", 30, { city: "New York", country: "USA" });
```

- 3: Object.create() method: You can use the Object.create() method to create a new object with a specified prototype object.

```js
const personPrototype = {
  sayHello: function () {
    console.log("Hello!");
  },
};

const person = Object.create(personPrototype, {
  name: { value: "John" },
  age: { value: 30 },
  address: { value: { city: "New York", country: "USA" } },
});
```

- 4 : ES6 class syntax: You can also create an object using the class syntax introduced in ES6.

```js
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  sayHello() {
    console.log("Hello!");
  }
}

const person = new Person("John", 30, { city: "New York", country: "USA" });
```

</details>

<details>
<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >

```js

```

</details>
