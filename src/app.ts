type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

let e1: ElevatedEmployee = {
  name: "Alejandro",
  privileges: ["create-employee"],
  startDate: new Date(),
};

type Combinable = number | string;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//TYPE GUARDS
type UnknowEmployee = Admin | Employee;

function printEmployeeInformation(em: UnknowEmployee) {
  console.log(em.name);
  if ("privileges" in em) {
    console.log(em.privileges);
  }

  if ("startDate" in em) {
    console.log(em.startDate);
  }
}

printEmployeeInformation(e1);

// TYPE GUARDS WITH CLASSES

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo with " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if('loadCargo' in vehicle)
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Hourse {
  type: "hourse";
  runningSpeed: number;
}

type Animal = Bird | Hourse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "hourse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "hourse", runningSpeed: 40 });

// TYPE CASTING

// let inputElement = <HTMLInputElement>document.getElementById('nameInput')!
// let inputElement = document.getElementById('nameInput')! as HTMLInputElement
let inputElement = document.getElementById("nameInput");

// let value = inputElement.value
let value = (inputElement as HTMLInputElement).value;

// INDEX PROPERTIES
interface ErrorContainer {
  // can be property or any name
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Not a valid username",
};
