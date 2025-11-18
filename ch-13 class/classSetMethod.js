class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
    this.salary = "";
  }
  set employeeSalary(salary) {
    return (this.salary = salary);
  }
}

const emp1 = new Employee("charlie", "IT");

emp1.employeeSalary = 10000;

console.log("emp1 detail", emp1);
