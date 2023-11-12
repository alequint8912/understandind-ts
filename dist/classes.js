"use strict";
class Departament {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesCount() {
        var _a, _b;
        console.log((_b = (_a = this === null || this === void 0 ? void 0 : this.employees) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
    }
}
Departament.fiscalYear = 2023;
class ITDepartment extends Departament {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: ", this.id);
    }
}
class EconomyDepartment extends Departament {
    get mostRecentReport() {
        return this.lastReport;
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    constructor(id, reps) {
        super(id, "ECONOMY");
        this.reps = reps;
        this.reports = reps;
        this.lastReport = reps[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new EconomyDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Economy Department - ID: ", this.id);
    }
    addEmployee(employee) {
        if (this.name === "Camila")
            return;
        else
            this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Departament.createEmployee("Liz Amely");
console.log("Employee: ", employee1);
console.log("Fiscal Year: ", Departament.fiscalYear);
const it = new ITDepartment("d1", ["Alejandro"]);
it.describe();
console.log(it);
const economy = EconomyDepartment.getInstance();
economy.describe();
economy.addEmployee("Alejandro");
economy.addEmployee("Dania");
economy.printEmployeesCount();
economy.addReport("Something is wrong!");
economy.printReports();
console.log(`The most recent report is: ${economy.mostRecentReport}`);
economy.mostRecentReport = "This is a new report!";
console.log(`The most recent report is: ${economy.mostRecentReport}`);
economy.printReports();
//# sourceMappingURL=classes.js.map