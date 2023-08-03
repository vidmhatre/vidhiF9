class Emp {
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    displayInfo() {
      console.log(`Employee ID: ${this.id}`);
      console.log(`Employee Name: ${this.name}`);
      console.log(`Employee Salary: ${this.salary}`);
    }
  }
  
  const emp1 = new Emp(101, "vidhi mhatre", 50000);
  emp1.displayInfo();
  