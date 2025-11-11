// 1. object literals

let studentDetails = {
  name: "alice",
  age: 10,
};

// constructor

const MeasurementDetails = new Object();

MeasurementDetails.length = 200;

MeasurementDetails.width = 300;

MeasurementDetails.height = 400;

console.log(MeasurementDetails);

// accessing object property

const personDetail = {
  name: "alice",
  age: 20,
  profession: "worker",
  city: "mumbai",
};

console.log(personDetail);

console.log(personDetail.name);

// using bracket

console.log(personDetail["profession"]);

personDetail.profession = "banker";

personDetail.department = "finance";

console.log(personDetail);

// destructing

const { profession } = personDetail;

console.log(profession);

const { name: names } = personDetail;

console.log(names);

const student1 = {
  id: 9688,
  name: "brij",
  age: 19,
  course: "fullstack development",
};

const student2 = {
  id: 9035,
  name: "vaishali",
  age: 18,
  course: "fullstack development",
};

// now defining object using function constructor

function StudentDetail(id, name, age, course) {
  (this.id = id), (this.name = name), (this.age = age), (this.course = course);
}

const student3 = new StudentDetail(
  9772,
  "Dharmik",
  19,
  "fullstack development"
);

const student4 = new StudentDetail(8557, "pratik", 19, "fullstack development");

StudentDetail.prototype.email = "abcd@gmail.com";

console.log("student email", student3.email);

console.log(student3);
console.log(student4);

const shoppingList = {
  name: "grocery",
  total: 5000,
  items: 10,
};

console.log("shopping list", shoppingList);

// now deleting the property of object

delete shoppingList.items;

console.log("shopping list", shoppingList);

// hasOwnProperty

// const isItemAvailable = shoppingList.hasOwnProperty("items");
const isItemAvailable = shoppingList.hasOwnProperty("total");

console.log("is item Available", isItemAvailable);

for (let key in shoppingList) {
  console.log("accessing shopping list", shoppingList[key]);
}
