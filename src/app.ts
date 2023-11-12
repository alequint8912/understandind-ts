interface PersonInterface {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface Addfn {
  (a: number, b: number): number;
}

let add: Addfn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string; // optional property
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;
  constructor(a: number, n?: string) {
    // optional property

    if (n) this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    this.name
      ? console.log(`${phrase} ${this.name} and I am ${this.age} years old!`)
      : console.log("Hi!");
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
user2 = new Person(33);
// user2.name = '' // Cannot assign to 'name' because it is a read-only property.
user2.greet("Hello, my name is");
