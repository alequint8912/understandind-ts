"use strict";
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(a, n) {
        if (n)
            this.name = n;
        this.age = a;
    }
    greet(phrase) {
        this.name
            ? console.log(`${phrase} ${this.name} and I am ${this.age} years old!`)
            : console.log("Hi!");
    }
}
let user1;
user1 = {
    name: "Alejandro Quintero",
    age: 33,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
let user2;
user2 = new Person(33);
user2.greet("Hello, my name is");
//# sourceMappingURL=app.js.map