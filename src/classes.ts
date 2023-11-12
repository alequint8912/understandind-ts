abstract class Departament {
  // An abstract class cannot be instantiated
  //   private readonly id: string;
  //   name: string;
  //   private employees: string[] = []; //private properties are not accessible from extendes classes, just inside the class that define it
  protected employees: string[] = []; // protected properties the kind of private properties, but are accessibles from extended classes
  static fiscalYear = 2023;

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Departament): void;

  addEmployee(employee: string) {
    //this.id ="d2" //This can not be done, because id is a realonly property
    this.employees.push(employee);
  }

  printEmployeesCount() {
    console.log(this?.employees?.length ?? 0);
  }
}

class ITDepartment extends Departament {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(): void {
    console.log("IT Department - ID: ", this.id);
  }
}

// SINGLETON PATTERN
class EconomyDepartment extends Departament {
  private reports: string[];
  private lastReport: string;
  private static instance: EconomyDepartment;

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  private constructor(id: string, public reps: string[]) {
    super(id, "ECONOMY");
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

  describe(): void {
    console.log("Economy Department - ID: ", this.id);
  }

  addEmployee(employee: string): void {
    if (this.name === "Camila") return;
    else this.employees.push(employee);
  }

  addReport(report: string) {
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
// const economyClone = { name: "MMTT", describe: economy.describe };
// economyClone.describe();

// const economyClone = { describe: economy.describe.bind(economy) };
// const describeClone = economy.describe.bind(economy);
// describeClone();

// economyClone.describe.bind(economy);
// economyClone.describe();
