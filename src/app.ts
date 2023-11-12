interface PersonInterface {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name} and I am ${this.age} years old!`);
  }
}

let user1: PersonInterface;

user1 = {
  name: "Alejandro Quintero",
  age: 33,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

let user2: Greetable;
user2 = new Person("Alejandro", 33);
user2.greet("Hello, my name is");
