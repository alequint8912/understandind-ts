"use strict";
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} and I am ${this.age} years old!`);
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
user2 = new Person("Alejandro", 33);
user2.greet("Hello, my name is");
//# sourceMappingURL=app.js.map