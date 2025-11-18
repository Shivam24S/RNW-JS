class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("bob", 20);

// inheritance

class PersonDetail extends Person {
  constructor(name, age, job, city) {
    super(name, age);
    this.job = job;
    this.city = city;
  }
}

const personDetail1 = new PersonDetail(
  "alice",
  20,
  "salesman",
  "san-francisco"
);

console.log("personDetail", personDetail1);
