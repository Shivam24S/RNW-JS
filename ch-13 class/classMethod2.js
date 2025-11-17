class StudentDetail {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
  institute() {
    let institute = "abcd";
    return institute;
  }
}

const student1 = new StudentDetail("bob", 20, "xyz");

console.log(
  "hello my name is" +
    " " +
    student1.name +
    " " +
    "my age is" +
    " " +
    student1.age +
    " " +
    "and i am pursuing" +
    " " +
    student1.course +
    " " +
    "in this institute" +
    " " +
    student1.institute()
);
