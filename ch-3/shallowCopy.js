
// passed by reference

const person = {
    name:"alice",
    age:20
}



const person2 = person



// console.log("person 1 ",person)
// console.log("person 2 ",person2)


person2.name="bob"

console.log("person 1 ",person)
console.log("person 2",person2)