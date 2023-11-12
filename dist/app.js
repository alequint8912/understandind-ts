"use strict";
let e1 = {
    name: "Alejandro",
    privileges: ["create-employee"],
    startDate: new Date(),
};
function printEmployeeInformation(em) {
    console.log(em.name);
    if ("privileges" in em) {
        console.log(em.privileges);
    }
    if ("startDate" in em) {
        console.log(em.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo with " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
let inputElement = document.getElementById("nameInput");
let value = inputElement.value;
const errorBag = {
    email: "Not a valid email!",
    username: "Not a valid username",
};
//# sourceMappingURL=app.js.map